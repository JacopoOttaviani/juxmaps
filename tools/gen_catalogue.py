#!/usr/bin/env python3
"""Generates assets/js/catalogue.js.

    python3 tools/gen_catalogue.py            regenerate from tools/data/*.json
    python3 tools/gen_catalogue.py --fetch    first fetch anything missing from tools/data, then regenerate

Measured fields (bounding boxes, centres, scan sizes, thumbnails, usable zoom,
anchor coordinates) are never hand-typed. They are read from the archives'
APIs and from OpenStreetMap Nominatim into tools/data/maps.json and
tools/data/anchors.json, which are committed so the catalogue can be rebuilt
offline. --fetch only touches records that are not in those files yet; delete
an entry to force it to be measured again.

Everything editorial — which sheets to keep, titles, notes, which landmarks to
offer as reference points — lives in the dictionaries below.
"""
import io, json, math, os, sys, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "tools", "data")
MAPS_PATH = os.path.join(DATA, "maps.json")
ANCHORS_PATH = os.path.join(DATA, "anchors.json")
OUT = os.path.join(ROOT, "assets", "js", "catalogue.js")
UA = {"User-Agent": "JuxMaps-prototype/0.1"}

ARCHIVES = {
  "mw": dict(name="Map Warper", host="https://mapwarper.net"),
  "wm": dict(name="Wikimaps Warper", host="https://warper.wmflabs.org"),
}

# An "empty" tile from either archive is a 334-byte transparent PNG; anything
# carrying real scan pixels is tens of kilobytes.
EMPTY_TILE_BYTES = 1024


def get(url, timeout=60):
    r = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(r, timeout=timeout) as x:
        return x.read()


def tile_xy(lat, lon, z):
    n = 2 ** z
    la = math.radians(lat)
    return int((lon + 180) / 360 * n), int((1 - math.log(math.tan(la) + 1 / math.cos(la)) / math.pi) / 2 * n)


def fetch_map(mid, arch):
    """Read one record from its archive's API and prove it serves tiles."""
    h = ARCHIVES[arch]["host"]
    d = json.loads(get("%s/api/v1/maps/%s" % (h, mid)))["data"]
    a = d["attributes"]
    if a.get("status") != "warped":
        sys.exit("%s:%s is not warped (status=%r) — not added" % (arch, mid, a.get("status")))
    bb = [float(v) for v in a["bbox"].split(",")]
    center = [round((bb[1] + bb[3]) / 2, 6), round((bb[0] + bb[2]) / 2, 6)]
    th = (d.get("links") or {}).get("thumb") or ""
    if th.startswith("/"):
        th = h + th
    ok = []
    for z in range(11, 20):
        x, y = tile_xy(center[0], center[1], z)
        try:
            if len(get("%s/maps/tile/%s/%d/%d/%d.png" % (h, mid, z, x, y))) > EMPTY_TILE_BYTES:
                ok.append(z)
        except Exception:
            pass
    if not ok:
        sys.exit("%s:%s claims to be warped but serves no tile at its own centre — not added" % (arch, mid))
    return dict(archive=arch, title=a.get("title") or "", desc=a.get("description") or "",
                date=a.get("date_depicted") or "", source=a.get("source_uri") or "",
                px=[a.get("width"), a.get("height")], bbox=bb, center=center, thumb=th, max_zoom=max(ok))


def geocode(q):
    d = json.loads(get("https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + urllib.parse.quote(q)))
    if not d:
        sys.exit("Nominatim found nothing for %r" % q)
    r = d[0]
    return dict(lat=float(r["lat"]), lon=float(r["lon"]), resolved=r.get("display_name", ""),
                osm="%s/%s" % (r.get("osm_type"), r.get("osm_id")))


# ---------------------------------------------------------------- editorial
# year      : numeric key for sorting only
# label     : what the badge shows
# dated     : True when the source record itself carries the date
# title/by  : editorial description of the sheet
# note      : one line on what the map is good for
ED = {
  # ---- London
  "86349": dict(year=1561, label="c.1561", dated=True, title="Civitas Londinium (the “Agas” map)",
      by="Attributed to Ralph Agas", note="Woodcut bird’s-eye view of Tudor London, before the Great Fire redrew the City."),
  "78149": dict(year=1670, label="17th c.", dated=False, title="Hollar’s map of 17th-century London",
      by="After Wenceslaus Hollar", note="Post-Fire London. The source record dates it “1688?” — treat the year as unsettled."),
  "107905": dict(year=1746, label="1746", dated=True, title="A Plan of the Cities of London and Westminster",
      by="John Rocque & John Pine, surveyed 1737–46", note="All 24 sheets fused. The first genuinely accurate street survey of London."),
  "91174": dict(year=1835, label="1835", dated=True, title="London in 1835",
      by="Publisher not stated in the record", note="Pre-railway London, just before the termini began carving up the inner suburbs."),
  "55847": dict(year=1886, label="1886", dated=True, title="Stanford’s Library Map of London and its Suburbs",
      by="Edward Stanford, six inches to the mile", note="Twenty-four sheets at high detail — the classic late-Victorian reference map."),
  "31741": dict(year=1889, label="c.1889", dated=False, title="Descriptive Map of London Poverty",
      by="Charles Booth’s survey", note="Streets coloured by income and class. Undated in the record; Booth’s first edition is 1889."),
  # ---- Paris
  "87796": dict(year=1550, label="c.1550", dated=True, title="Plan de Paris (the “Plan de Bâle”)",
      by="Olivier Truschet & Germain Hoyau", note="Renaissance Paris still inside its walls, drawn in bird’s-eye perspective."),
  "12785": dict(year=1809, label="1809", dated=False, title="Plan routier de la ville de Paris et de ses faubourgs",
      by="Charles Picquet", note="Napoleonic Paris. Year read from the source file name, not the catalogue field."),
  "84310": dict(year=1823, label="1823", dated=True, title="Plan routier de la ville de Paris et de ses faubourgs",
      by="Publisher not stated in the record", note="Restoration Paris, three decades before Haussmann."),
  "21113": dict(year=1840, label="1840", dated=True, title="Atlas général de la Ville de Paris",
      by="Théodore Jacoubet", note="The parcel-level atlas Haussmann’s planners actually worked from."),
  "79748": dict(year=1860, label="1860", dated=True, title="Map of Paris in 1860",
      by="Publisher not stated in the record", note="The year the city absorbed its suburbs and the boulevards began cutting through."),
  "108484": dict(year=1871, label="1871", dated=True, title="Barricades de la Commune de Paris",
      by="Compiled after the Commune", note="Barricade positions from the spring of 1871 — a news map of an insurrection."),
  # ---- Rome
  "42336": dict(year=1551, label="c.1551", dated=False, title="Pianta di Roma (the Bufalini plan)",
      by="After Leonardo Bufalini", note="The first measured plan of Rome, cut on woodblocks. Undated in the source record; Bufalini's plan is 1551."),
  "9175": dict(year=1748, label="c.1748", dated=False, title="La Nuova Topografia di Roma (the Nolli plan)",
      by="Giambattista Nolli", note="The famous figure-ground plan: churches and courtyards drawn as public space. Undated in the record; Nolli's plan is 1748."),
  "106493": dict(year=1866, label="1866", dated=True, title="Pianta topografica di Roma e suoi contorni",
      by="Direzione Generale del Censo", note="Cadastral survey of papal Rome at 19,150 px wide — five years before the city became the Italian capital."),
  "85774": dict(year=1883, label="1883", dated=True, title="Rome, 1883",
      by="Publisher not stated in the record", note="Rome as the new national capital, as ministries and speculative quarters go up."),
  "108397": dict(year=1889, label="1889", dated=True, title="Rome en 1889",
      by="Publisher not stated in the record", note="The post-unification building boom, with the Tiber embankments under construction."),
  "67999": dict(year=1944, label="1944", dated=True, title="Rome, 1944",
      by="Publisher not stated in the record", note="Wartime Rome. The Fascist-era avenues have already been driven through the old centre."),
  # ---- Istanbul
  "105894": dict(year=1895, label="1890s", dated=True, title="Map of Istanbul, 1890s",
      by="Publisher not stated in the record", note="Late-Ottoman Istanbul before the fires and rebuilding of the 1900s."),
  "52663": dict(year=1912, label="1912–13", dated=True, title="Istanbul, 1912–13",
      by="Publisher not stated in the record", note="The Balkan Wars years. Tiles are served to zoom 14; deeper zooms are upscaled."),
  "81836": dict(year=1917, label="1917", dated=True, title="Istanbul, 1917",
      by="Publisher not stated in the record", note="Wartime Istanbul in the last years of the empire."),
  "101822": dict(year=1918, label="undated", dated=False, title="Map of Istanbul by Necip Bey",
      by="Necip Bey", note="Carries no date in the source record. Placed here by cartographic style, not evidence."),
  "49587": dict(year=1922, label="1922", dated=True, title="Istanbul, 1922",
      by="Publisher not stated in the record", note="The year before the republic; the city on the eve of losing capital status."),
  # ---- Jerusalem
  "91816": dict(year=1815, label="1815", dated=True, title="Jerusalem, 1815",
      by="Publisher not stated in the record", note="The walled city before 19th-century European surveying arrived."),
  "91812": dict(year=1901, label="1901", dated=True, title="Jerusalem, 1901",
      by="Publisher not stated in the record", note="Late Ottoman Jerusalem, as building outside the walls accelerates."),
  "39933": dict(year=1917, label="1917", dated=True, title="Environs of Jerusalem",
      by="Publisher not stated in the record", note="Covers the surrounding country, not just the Old City — useful for terrain anchoring."),
  "39934": dict(year=1947, label="1947", dated=True, title="Jerusalem, Survey of Palestine",
      by="Reproduced and printed by the Survey of Palestine", note="The last full mandate-era survey sheet of the city."),
  # ---- Cape Town  (mnz caps maxNativeZoom at the scan's real resolution)
  "38596": dict(year=1880, label="1880", dated=True, title="Cape Town, 1880", mnz=14,
      by="Publisher not stated in the record", note="The only street plan in this set. A small scan — it runs out of detail at about zoom 14."),
  "7100": dict(year=1921, label="1870/1921", dated=True, title="Admiralty Chart 636: The Cape of Good Hope and False Bay", mnz=15,
      by="British Admiralty, via Wikimedia Commons", note="Published 1870; this sheet is the 1921 new edition. Covers the whole peninsula and both coasts."),
  "5873": dict(year=1943, label="1943", dated=True, title="Admiralty Chart 123: Table Bay Docks and Approaches", mnz=18,
      by="British Admiralty, via Wikimedia Commons", note="The docks at war, charted just before the Foreshore scheme filled in the bay behind them."),
  "4555": dict(year=1966, label="1966", dated=True, title="Admiralty Chart 1920: Table Bay", mnz=16,
      by="British Admiralty, via Wikimedia Commons", note="After reclamation. Set this against the 1943 sheet and the new land appears."),
  # ---- Mumbai
  "39408": dict(year=1827, label="1827", dated=True, title="Bombay Fort, 1827",
      by="Publisher not stated in the record", note="The fortified town before the ramparts came down in the 1860s."),
  "42741": dict(year=1855, label="1855", dated=True, title="Map of the Native Town of Bombay",
      by="Publisher not stated in the record", note="Dense survey of the northern town, drawn before the great reclamations."),
  "34127": dict(year=1919, label="1919", dated=True, title="Bombay, 1919",
      by="Publisher not stated in the record", note="After Back Bay and Mazagon reclamation — compare the shoreline with 1827."),
  "54898": dict(year=1931, label="1931", dated=True, title="Bombay, 1931",
      by="Publisher not stated in the record", note="Interwar Bombay, with the reclaimed foreshore laid out for building."),
  "29682": dict(year=1933, label="1933", dated=True, title="Bombay Guide Map, with part of Salsette Island",
      by="Survey of India style guide map", note="Widest extent of the set — reaches north into Salsette."),
  # ---- Mexico City
  "30271": dict(year=1793, label="1793", dated=True, title="Plan General de la Ciudad de México",
      by="Rare Maps Collection, LLILAS Benson, UT Austin", note="Late-colonial capital on the drained lake bed, still compact around the Zócalo."),
  "60811": dict(year=1886, label="1886", dated=True, title="Mexico City, 1886",
      by="Publisher not stated in the record", note="Porfirian city, before the drainage works transformed the valley."),
  "70242": dict(year=1894, label="1894", dated=True, title="Plano que indica las calles donde hay atarjeas",
      by="Comisión de Saneamiento", note="Sewer and drainage plan: street width and pipe depth, block by block."),
  "82837": dict(year=1907, label="1907", dated=True, title="Plano de la Ciudad de México, 1907",
      by="Compañía Litográfica y Tipográfica", note="Relief shown by hachures. The source sheet is torn and brittle at the folds."),
  "71780": dict(year=1955, label="1955", dated=True, title="Mexico City, 1955",
      by="Publisher not stated in the record", note="Mid-century sprawl across the valley — the widest extent in this set."),
  # ---- Lisbon  (three Map Warper sheets, three from Wikimaps Warper; mnz caps at the scan's real resolution)
  "77661": dict(year=1650, label="1650", dated=True, title="Planta de Lisboa em 1650 (the Tinoco plan)", mnz=17,
      by="After João Nunes Tinoco; Museu de Lisboa copy", note="The earliest measured plan of the city, a century before the 1755 earthquake and the Pombaline rebuild flattened the Baixa."),
  "78043": dict(year=1650, label="1650", dated=True, title="Lisboa em 1650, redrawn", mnz=16,
      by="Mário Xavier de Brito, after Tinoco (Revista Municipal)", note="A 20th-century clean redrawing of the Tinoco plan — far easier to read than the original. Use it to decode the sheet above, not as independent evidence."),
  "157": dict(year=1812, label="c.1812", dated=True, title="Plano geral da cidade de Lisboa em 1812", mnz=14,
      by="Biblioteca Nacional de Portugal, via Wikimedia Commons", note="Post-earthquake Lisbon: the Pombaline grid is in place and the city still ends near Alcântara. A small scan — it runs out of detail at about zoom 14."),
  "5795": dict(year=1871, label="1871", dated=True, title="Admiralty Chart 89: Entrance to the Tagus and Lisbon Harbour", mnz=15,
      by="British Admiralty, via Wikimedia Commons", note="The estuary from the bar at the river mouth up to the city: soundings, forts and the shoreline before the port works began in 1887."),
  "22024": dict(year=1911, label="undated", dated=False, title="Lisbon, assembled survey sheets", mnz=18,
      by="Publisher not stated in the record", note="Carries no date or source in the record. The coloured 1:1000 sheets and their grid match the municipal survey of 1904–11; placed here by style, not evidence. The black areas are the scan’s margins outside the sheet grid, not the map."),
  "6096": dict(year=1971, label="1971", dated=True, title="Admiralty Chart 3264: Port of Lisbon", mnz=16,
      by="British Admiralty, via Wikimedia Commons", note="The modern port: Alcântara and Santos docks on filled riverbed, and the 1966 bridge across the Tagus. Set it against 1871 and the shoreline has moved."),
}

CITY_ORDER = ["london", "paris", "rome", "lisbon", "istanbul", "jerusalem", "capetown", "mumbai", "mexicocity"]
KEEP = {
  "london": ["86349", "78149", "107905", "91174", "55847", "31741"],
  "paris": ["87796", "12785", "84310", "21113", "79748", "108484"],
  "rome": ["42336", "9175", "106493", "85774", "108397", "67999"],
  "lisbon": ["77661", "78043", "157", "5795", "22024", "6096"],
  "istanbul": ["105894", "52663", "81836", "101822", "49587"],
  "jerusalem": ["91816", "91812", "39933", "39934"],
  "capetown": ["38596", "7100", "5873", "4555"],
  "mumbai": ["39408", "42741", "34127", "54898", "29682"],
  "mexicocity": ["30271", "60811", "70242", "82837", "71780"],
}

# Which archive each sheet lives on. Anything not listed is on Map Warper.
SOURCE = {
  "7100": "wm", "5873": "wm", "4555": "wm",      # Cape Town — Admiralty charts via Wikimedia Commons
  "157": "wm", "5795": "wm", "6096": "wm",       # Lisbon — 1812 plan and two Admiralty charts via Wikimedia Commons
}

# Reference points per city: (Nominatim query, kind). Order is display order.
# Coordinates are resolved by Nominatim into tools/data/anchors.json, never typed here.
ANCHORS = {
 "london": [
   ("St Paul's Cathedral, London, UK", "built"),
   ("Tower of London, London, UK", "built"),
   ("Westminster Abbey, London, UK", "built"),
   ("London Bridge, London, UK", "water"),
   ("Temple Church, London, UK", "built"),
 ],
 "paris": [
   ("Cathedrale Notre-Dame de Paris, France", "built"),
   ("Musee du Louvre, Paris, France", "built"),
   ("Pont Neuf, Paris, France", "water"),
   ("Hotel des Invalides, Paris, France", "built"),
   ("Place de la Concorde, Paris, France", "built"),
   ("Ile de la Cite, Paris, France", "water"),
 ],
 "rome": [
   ("Colosseum, Rome, Italy", "built"),
   ("Pantheon, Rome, Italy", "built"),
   ("St Peter's Basilica, Vatican City", "built"),
   ("Castel Sant'Angelo, Rome, Italy", "built"),
   ("Tiber Island, Rome, Italy", "water"),
   ("Capitoline Hill, Rome, Italy", "relief"),
 ],
 "lisbon": [
   ("Castelo de São Jorge, Lisboa, Portugal", "built"),
   ("Sé de Lisboa, Lisboa, Portugal", "built"),
   ("Praça do Comércio, Lisboa, Portugal", "built"),
   ("Praça Dom Pedro IV, Lisboa, Portugal", "built"),
   ("Igreja do Carmo, Lisboa, Portugal", "built"),
   ("Mosteiro dos Jerónimos, Lisboa, Portugal", "built"),
   ("Torre de Belém, Lisboa, Portugal", "built"),
   ("Doca de Alcântara, Lisboa, Portugal", "water"),
 ],
 "istanbul": [
   ("Hagia Sophia, Istanbul, Turkey", "built"),
   ("Topkapi Palace, Istanbul, Turkey", "built"),
   ("Galata Tower, Istanbul, Turkey", "built"),
   ("Suleymaniye Mosque, Istanbul, Turkey", "built"),
   ("Golden Horn, Istanbul, Turkey", "water"),
   ("Maiden's Tower, Istanbul, Turkey", "water"),
 ],
 "jerusalem": [
   ("Dome of the Rock, Jerusalem", "built"),
   ("Damascus Gate, Jerusalem", "built"),
   ("Jaffa Gate, Jerusalem", "built"),
   ("Church of the Holy Sepulchre, Jerusalem", "built"),
   ("Mount of Olives, Jerusalem", "relief"),
   ("Tower of David, Jerusalem", "built"),
 ],
 "capetown": [
   ("Table Mountain, Cape Town, South Africa", "relief"),
   ("Signal Hill, Cape Town, South Africa", "relief"),
   ("Castle of Good Hope, Cape Town, South Africa", "built"),
   ("Company's Garden, Cape Town, South Africa", "built"),
   ("Grand Parade, Cape Town, South Africa", "built"),
   ("Table Bay, Cape Town, South Africa", "water"),
 ],
 "mumbai": [
   ("Chhatrapati Shivaji Maharaj Terminus, Mumbai, India", "built"),
   ("Malabar Hill, Mumbai, India", "relief"),
   ("Back Bay, Mumbai, India", "water"),
   ("Colaba, Mumbai, India", "built"),
   ("Mahim Bay, Mumbai, India", "water"),
   ("Mazagon, Mumbai, India", "built"),
 ],
 "mexicocity": [
   ("Zocalo, Mexico City, Mexico", "built"),
   ("Catedral Metropolitana, Mexico City, Mexico", "built"),
   ("Alameda Central, Mexico City, Mexico", "built"),
   ("Chapultepec Castle, Mexico City, Mexico", "relief"),
   ("Templo Mayor, Mexico City, Mexico", "built"),
   ("Paseo de la Reforma, Mexico City, Mexico", "built"),
 ],
}

CITY = {
 "london": dict(name="London", country="United Kingdom", zoom=13,
   blurb="Four and a half centuries of London, from the Tudor woodcut city to Charles Booth’s poverty survey.",
   story="London is the deepest set here. The Thames barely moves, which makes it an unusually forgiving city to anchor: the river, the Tower and St Paul’s hold still while everything between them is rebuilt. Watch the Great Fire of 1666 fall between the Agas and Hollar sheets, and the railways arrive between 1835 and 1886."),
 "paris": dict(name="Paris", country="France", zoom=13,
   blurb="Renaissance Paris to the Commune barricades, across the Haussmann rebuild.",
   story="The reason to juxtapose Paris is Haussmann. Slide between 1840 and 1860 and the medieval street network on the Right Bank is replaced by boulevards driven straight through it. The 1871 barricade map then puts an insurrection onto that new geometry. The Seine and the Île de la Cité anchor every sheet."),
 "rome": dict(name="Rome", country="Italy", zoom=13,
   blurb="Papal Rome to the wartime capital, over the plans that reshaped a city built on its own ruins.",
   story="Rome rewards juxtaposition because so much of it never moved: the Pantheon, the Colosseum and Castel Sant’Angelo sit where they sat in 1551. What changes is everything between them. Compare 1866 — papal Rome, five years before it became the Italian capital — with 1889, and the ministries, speculative quarters and Tiber embankments have arrived. The river is the anchor to distrust here: its banks were rebuilt from 1876."),
 "lisbon": dict(name="Lisbon", country="Portugal", zoom=13,
   blurb="Tinoco’s 1650 plan to the modern port, across the earthquake that erased the old city and the docks that pushed back the river.",
   story="Lisbon’s break is 1755. The earthquake, fire and tsunami destroyed the Baixa, and Pombal’s engineers rebuilt it on a grid that ignored the old streets: slide between the 1650 Tinoco plan and the 1812 sheet and the medieval lanes between the castle and the river are replaced by straight blocks. The castle, the Sé and the Carmo convent sit still through all of it — the Carmo as a roofless ruin after 1755. The riverfront is the line not to trust. The Aterro da Boavista (1858–65) and the port works from 1887 filled in the Tagus foreshore west of the Praça do Comércio, so the two Admiralty charts disagree about where the water is."),
 "istanbul": dict(name="Istanbul", country="Türkiye", zoom=13,
   blurb="Late-Ottoman Istanbul through the Balkan Wars, the First World War and the end of empire.",
   story="A tight thirty-year window on a city about to change hands politically. The peninsula’s monuments — Hagia Sophia, Süleymaniye, Topkapı — are exceptionally good anchors because they are large, old and unmoved. The waterline of the Golden Horn is the feature to watch."),
 "jerusalem": dict(name="Jerusalem", country="", zoom=15,
   blurb="The walled city and its environs, from 1815 through the end of the British Mandate.",
   story="Jerusalem’s Old City walls and gates have held their position since the 16th century, which makes them close to ideal control points. The interest is outside them: compare 1815 with 1947 and the city spreads far beyond the walls. Sheets here differ sharply in extent — some cover only the Old City."),
 "capetown": dict(name="Cape Town", country="South Africa", zoom=13,
   blurb="The Cape charted from the sea, across the reclamation that pushed Table Bay’s shoreline outwards.",
   story="Cape Town is charted here mostly from the water: three British Admiralty sheets and one town plan. They span the Foreshore reclamation, the mid-20th-century scheme that filled in the head of Table Bay and pushed the shoreline well beyond its historic line. Set the 1943 docks chart against 1966 and the new ground appears. The Castle of Good Hope is the anchor to watch — built at the water’s edge in the 1660s, it now sits inland. Table Mountain behind it has not moved at all."),
 "mumbai": dict(name="Mumbai", country="India", zoom=13,
   blurb="Bombay’s seven islands becoming one city, through a century of land reclamation.",
   story="This is the set where the coastline itself is the story. Between 1827 and 1933 the sea between the islands is filled in, so the shoreline is not a reliable anchor — it is the thing being measured. Anchor on Malabar Hill and the inland street grid instead, then watch Back Bay change shape underneath them."),
 "mexicocity": dict(name="Mexico City", country="Mexico", zoom=13,
   blurb="The colonial capital on a drained lake bed, growing across the Valley of Mexico.",
   story="Mexico City sits on the bed of a drained lake, and it is sinking — unevenly. The colonial grid around the Zócalo is stable enough to anchor on, but the ground under it has dropped metres since 1793. Compare the 1894 drainage plan with the 1955 sheet to see the valley fill in."),
}

ANOTE = {
 "St Paul's Cathedral, London, UK": ("St Paul’s Cathedral", "Cathedral on this site since the 1240s; Wren’s dome from 1710.", 1240),
 "Tower of London, London, UK": ("Tower of London", "Norman keep begun 1078; the outline has barely moved.", 1078),
 "Westminster Abbey, London, UK": ("Westminster Abbey", "Gothic rebuild from 1245, on a much older foundation.", 1245),
 "London Bridge, London, UK": ("London Bridge", "A crossing here since Roman times; the stone bridge from 1209.", 1209),
 "Temple Church, London, UK": ("Temple Church", "Consecrated 1185 and visible on the earliest sheets.", 1185),
 "Cathedrale Notre-Dame de Paris, France": ("Notre-Dame de Paris", "Begun 1163 on the Île de la Cité — present on every Paris sheet.", 1163),
 "Musee du Louvre, Paris, France": ("Palais du Louvre", "Fortress from 1190, palace thereafter; footprint grew over time.", 1190),
 "Pont Neuf, Paris, France": ("Pont Neuf", "Completed 1607 — later than the 1550 sheet.", 1607),
 "Hotel des Invalides, Paris, France": ("Hôtel des Invalides", "Built from 1671; a fixed point on the Left Bank.", 1671),
 "Place de la Concorde, Paris, France": ("Place de la Concorde", "Laid out from 1755; useful for the 19th-century sheets.", 1755),
 "Ile de la Cite, Paris, France": ("Île de la Cité", "The island itself — the most stable anchor in Paris.", 0),
 "Colosseum, Rome, Italy": ("Colosseum", "Completed AD 80; drawn on every plan of Rome since.", 80),
 "Pantheon, Rome, Italy": ("Pantheon", "Standing since AD 126 — the most precise fixed point in the centre.", 126),
 "St Peter's Basilica, Vatican City": ("St Peter’s Basilica", "A basilica here since the 4th century; the present church was finished in 1626, so its footprint changes between sheets.", 324),
 "Castel Sant'Angelo, Rome, Italy": ("Castel Sant’Angelo", "Hadrian’s mausoleum, AD 139 — unmoved for nineteen centuries.", 139),
 "Tiber Island, Rome, Italy": ("Tiber Island", "The island holds its position, but the banks around it were rebuilt.", 0),
 "Capitoline Hill, Rome, Italy": ("Capitoline Hill", "Terrain, not building — one of the seven hills, above the Forum.", 0),
 "Hagia Sophia, Istanbul, Turkey": ("Hagia Sophia", "Standing since 537; the strongest anchor on the peninsula.", 537),
 "Topkapi Palace, Istanbul, Turkey": ("Topkapı Palace", "Begun 1459 on the seraglio point.", 1459),
 "Galata Tower, Istanbul, Turkey": ("Galata Tower", "Genoese tower of 1348, north of the Golden Horn.", 1348),
 "Suleymaniye Mosque, Istanbul, Turkey": ("Süleymaniye Mosque", "Sinan’s complex, completed 1557, on the third hill.", 1557),
 "Golden Horn, Istanbul, Turkey": ("Golden Horn", "The inlet itself; its quays were reshaped in the 20th century.", 0),
 "Maiden's Tower, Istanbul, Turkey": ("Maiden’s Tower", "Islet tower in the Bosphorus — an offshore fixed point.", 1110),
 "Dome of the Rock, Jerusalem": ("Dome of the Rock", "Completed 691; the octagon is unmistakable on old sheets.", 691),
 "Damascus Gate, Jerusalem": ("Damascus Gate", "Ottoman gate of 1537 in the north wall.", 1537),
 "Jaffa Gate, Jerusalem": ("Jaffa Gate", "Ottoman gate of 1538 in the west wall.", 1538),
 "Church of the Holy Sepulchre, Jerusalem": ("Holy Sepulchre", "On this site since 335; drawn on nearly every map of the city.", 335),
 "Mount of Olives, Jerusalem": ("Mount of Olives", "Terrain, not building — the ridge east of the Old City.", 0),
 "Tower of David, Jerusalem": ("Tower of David", "Citadel by the Jaffa Gate; Herodian base, Mamluk rebuild.", 1310),
 "Table Mountain, Cape Town, South Africa": ("Table Mountain", "Terrain, not building — the one feature every chart of the bay agrees on.", 0),
 "Signal Hill, Cape Town, South Africa": ("Signal Hill", "The ridge above the old town; a dependable relief anchor.", 0),
 "Castle of Good Hope, Cape Town, South Africa": ("Castle of Good Hope", "Built 1666–79 at the water’s edge; reclamation later left it inland. Its pentagon is unmistakable on old charts.", 1666),
 "Company's Garden, Cape Town, South Africa": ("Company’s Garden", "Planted by the Dutch East India Company from 1652 — the oldest laid-out space in the city.", 1652),
 "Grand Parade, Cape Town, South Africa": ("Grand Parade", "The old parade ground below the Castle, open since the 18th century.", 1700),
 "Table Bay, Cape Town, South Africa": ("Table Bay", "The bay itself. Its southern head was reclaimed, not merely resurveyed.", 0),
 "Chhatrapati Shivaji Maharaj Terminus, Mumbai, India": ("Chhatrapati Shivaji Terminus", "Opened 1888 — absent from the 1827 and 1855 sheets.", 1888),
 "Malabar Hill, Mumbai, India": ("Malabar Hill", "High ground; the most stable anchor on the island.", 0),
 "Back Bay, Mumbai, India": ("Back Bay", "Do not anchor here — this shoreline was reclaimed and moved.", 0),
 "Colaba, Mumbai, India": ("Colaba", "Once a separate island, joined by causeway in 1838.", 0),
 "Mahim Bay, Mumbai, India": ("Mahim Bay", "Northern water gap, progressively narrowed by reclamation.", 0),
 "Mazagon, Mumbai, India": ("Mazagon", "Another of the seven islands, absorbed into the landmass.", 0),
 "Zocalo, Mexico City, Mexico": ("Zócalo", "The main square, laid out in 1524 on the Aztec centre.", 1524),
 "Catedral Metropolitana, Mexico City, Mexico": ("Catedral Metropolitana", "Built 1573–1813; it has visibly subsided since.", 1573),
 "Alameda Central, Mexico City, Mexico": ("Alameda Central", "Public park since 1592 — a clear shape on colonial sheets.", 1592),
 "Chapultepec Castle, Mexico City, Mexico": ("Chapultepec", "Hilltop castle from 1785, west of the historic centre.", 1785),
 "Templo Mayor, Mexico City, Mexico": ("Templo Mayor", "Aztec precinct, buried after 1521 and excavated from 1978.", 0),
 "Paseo de la Reforma, Mexico City, Mexico": ("Paseo de la Reforma", "Cut through from 1864 — absent on the 1793 sheet.", 1864),
 "Castelo de São Jorge, Lisboa, Portugal": ("Castelo de São Jorge", "Moorish hilltop citadel, taken in 1147; its walls have kept their line on every sheet.", 1100),
 "Sé de Lisboa, Lisboa, Portugal": ("Sé de Lisboa", "Begun 1147, just after the conquest; it came through the 1755 earthquake with its towers standing.", 1147),
 "Praça do Comércio, Lisboa, Portugal": ("Praça do Comércio", "The riverside palace square (Terreiro do Paço) from c.1500; rebuilt as the Pombaline square after 1755.", 1500),
 "Praça Dom Pedro IV, Lisboa, Portugal": ("Rossio", "The city’s main square since the Middle Ages; the Pombaline grid was laid out around it after 1755.", 1300),
 "Igreja do Carmo, Lisboa, Portugal": ("Convento do Carmo", "Founded 1389. The church lost its roof in the 1755 earthquake and was left as a ruin — it stands whole on the 1650 sheet.", 1389),
 "Mosteiro dos Jerónimos, Lisboa, Portugal": ("Mosteiro dos Jerónimos", "Begun 1501 at Belém, well west of the walled city; it fixes the western sheets.", 1501),
 "Torre de Belém, Lisboa, Portugal": ("Torre de Belém", "Finished 1519 on an islet in the river; the shore has since advanced to meet it.", 1519),
 "Doca de Alcântara, Lisboa, Portugal": ("Doca de Alcântara", "The 1887 docks, dug into reclaimed riverbed. On the 1650 and 1812 sheets this is open water.", 0),
}

# Features whose position genuinely moved between sheets. Named explicitly rather
# than pattern-matched, so the warning is data and not a guess about the name.
CAUTION = {
 "Back Bay, Mumbai, India": "Reclaimed shoreline — this line moved. Not a reliable control point.",
 "Mahim Bay, Mumbai, India": "Progressively narrowed by reclamation; the waterline is not fixed.",
 "Colaba, Mumbai, India": "A separate island until the 1838 causeway — expect it detached on early sheets.",
 "Golden Horn, Istanbul, Turkey": "The quays were reshaped in the 20th century. Anchor on the monuments instead.",
 "Tiber Island, Rome, Italy": "The Tiber embankments were built from 1876 — the riverbanks are not a fixed line.",
 "Table Bay, Cape Town, South Africa": "The Foreshore was reclaimed from the 1930s — this shoreline moved a long way. Not a control point.",
 "Doca de Alcântara, Lisboa, Portugal": "Built from 1887 on filled riverbed — the Tagus shoreline here moved several hundred metres. Not a control point.",
}


# ------------------------------------------------------------------- build
maps = json.load(open(MAPS_PATH, encoding="utf-8")) if os.path.exists(MAPS_PATH) else {}
anchors = json.load(open(ANCHORS_PATH, encoding="utf-8")) if os.path.exists(ANCHORS_PATH) else {}

if "--fetch" in sys.argv[1:]:
    changed = False
    for cid in CITY_ORDER:
        for mid in KEEP[cid]:
            if mid in maps:
                continue
            arch = SOURCE.get(mid, "mw")
            print("fetching %s:%s ..." % (arch, mid))
            maps[mid] = fetch_map(mid, arch)
            changed = True
        for q, kind in ANCHORS[cid]:
            if q in anchors:
                continue
            time.sleep(1.2)  # Nominatim asks for at most one request a second
            print("geocoding %r ..." % q)
            anchors[q] = geocode(q)
            print("   -> %s, %s  (%s)" % (anchors[q]["lat"], anchors[q]["lon"], anchors[q]["resolved"][:80]))
            changed = True
    if changed:
        os.makedirs(DATA, exist_ok=True)
        json.dump(maps, open(MAPS_PATH, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
        json.dump(anchors, open(ANCHORS_PATH, "w", encoding="utf-8"), indent=1, ensure_ascii=False)

# Validate before writing anything.
seen = {}
for cid in CITY_ORDER:
    assert cid in CITY and cid in KEEP and cid in ANCHORS, "city %r is missing editorial data" % cid
    for mid in KEEP[cid]:
        assert mid in ED, "no ED entry for %s (%s)" % (mid, cid)
        assert mid in maps, "no measured data for %s (%s) — run with --fetch" % (mid, cid)
        assert mid not in seen, "sheet id %s is used by both %s and %s" % (mid, seen[mid], cid)
        seen[mid] = cid
    for q, kind in ANCHORS[cid]:
        assert q in ANOTE, "no ANOTE entry for %r" % q
        assert q in anchors, "no coordinates for %r — run with --fetch" % q


def js(s):
    return json.dumps(s, ensure_ascii=False)

buf = io.StringIO()
w = buf.write
w("/* JuxMaps catalogue — GENERATED FILE, do not hand-edit.\n")
w("   Bounding boxes, centres, thumbnails and zoom ranges are read from the\n")
w("   Map Warper API. Anchor coordinates are resolved via OpenStreetMap\n")
w("   Nominatim. Titles, notes and anchor descriptions are editorial.\n")
w("   Regenerate with tools/gen_catalogue.py. */\n\n")

w("const JUX_BASEMAPS = [\n")
ESRI_ATTR = 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
BM = [
 ("esri-street", "Streets", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", ESRI_ATTR, 19),
 ("esri-gray-light", "Minimal (light)", "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", ESRI_ATTR, 16),
 ("esri-gray-dark", "Minimal (dark)", "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", ESRI_ATTR, 16),
 ("osm", "OpenStreetMap", "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 19),
 ("esri-imagery", "Satellite imagery", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  'Imagery &copy; Esri, Maxar, Earthstar Geographics', 19),
 ("opentopo", "Topographic", "https://tile.opentopomap.org/{z}/{x}/{y}.png",
  '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA), &copy; OpenStreetMap contributors', 17),
 ("blank", "None (old map only)", "", "", 20),
]
for i, (bid, name, url, attr, mx) in enumerate(BM):
    w("  { id:%s, name:%s, url:%s, attribution:%s, maxZoom:%d }%s\n" % (
        js(bid), js(name), js(url), js(attr), mx, "," if i < len(BM) - 1 else ""))
w("];\n\n")

w("const JUX_CITIES = [\n")
for ci, cid in enumerate(CITY_ORDER):
    c = CITY[cid]
    ancs = ANCHORS[cid]
    clat = round(sum(anchors[q]["lat"] for q, _ in ancs) / len(ancs), 5)
    clon = round(sum(anchors[q]["lon"] for q, _ in ancs) / len(ancs), 5)
    w("  {\n    id:%s, name:%s, country:%s,\n" % (js(cid), js(c["name"]), js(c["country"])))
    w("    center:[%s,%s], zoom:%d,\n" % (clat, clon, c["zoom"]))
    w("    blurb:%s,\n" % js(c["blurb"]))
    w("    story:%s,\n" % js(c["story"]))
    w("    anchors:[\n")
    for i, (q, kind) in enumerate(ancs):
        nm, note, since = ANOTE[q]
        w("      { name:%s, kind:%s, lat:%s, lon:%s, since:%d, note:%s, caution:%s }%s\n" % (
            js(nm), js(kind), anchors[q]["lat"], anchors[q]["lon"], since, js(note),
            js(CAUTION.get(q, "")), "," if i < len(ancs) - 1 else ""))
    w("    ],\n    overlays:[\n")
    ids = sorted(KEEP[cid], key=lambda m: ED[m]["year"])
    for i, mid in enumerate(ids):
        f = maps[mid]; e = ED[mid]
        bb = f["bbox"]
        arch = ARCHIVES[f["archive"]]
        tiles = "%s/maps/tile/%s/{z}/{x}/{y}.png" % (arch["host"], mid)
        page = "%s/maps/%s" % (arch["host"], mid)
        # cap at the zoom where the scan runs out of real detail, if declared
        mnz = min(f["max_zoom"], e["mnz"]) if e.get("mnz") else f["max_zoom"]
        w("      {\n")
        w("        id:%s, year:%d, label:%s, dated:%s,\n" % (js(mid), e["year"], js(e["label"]), "true" if e["dated"] else "false"))
        w("        title:%s,\n        by:%s,\n        note:%s,\n" % (js(e["title"]), js(e["by"]), js(e["note"])))
        w("        recordTitle:%s,\n" % js(f["title"]))
        w("        archive:%s,\n" % js(arch["name"]))
        w("        tiles:%s,\n" % js(tiles))
        w("        page:%s,\n" % js(page))
        w("        thumb:%s,\n" % js(f["thumb"]))
        w("        bounds:[[%s,%s],[%s,%s]],\n" % (bb[1], bb[0], bb[3], bb[2]))
        w("        center:[%s,%s], maxNativeZoom:%d, px:[%s,%s]\n" % (
            f["center"][0], f["center"][1], mnz, f["px"][0], f["px"][1]))
        w("      }%s\n" % ("," if i < len(ids) - 1 else ""))
    w("    ]\n  }%s\n" % ("," if ci < len(CITY_ORDER) - 1 else ""))
w("];\n")

open(OUT, "w", encoding="utf-8").write(buf.getvalue())
n_ov = sum(len(KEEP[c]) for c in CITY_ORDER)
n_an = sum(len(ANCHORS[c]) for c in CITY_ORDER)
print("wrote %s\ncities=%d overlays=%d anchors=%d bytes=%d" % (
    os.path.relpath(OUT, ROOT), len(CITY_ORDER), n_ov, n_an, len(buf.getvalue())))
