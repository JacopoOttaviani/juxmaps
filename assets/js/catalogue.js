/* JuxMaps catalogue — GENERATED FILE, do not hand-edit.
   Bounding boxes, centres, thumbnails and zoom ranges are read from the
   Map Warper API. Anchor coordinates are resolved via OpenStreetMap
   Nominatim. Titles, notes and anchor descriptions are editorial.
   Regenerate with tools/gen_catalogue.py. */

const JUX_BASEMAPS = [
  { id:"esri-street", name:"Streets", url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", attribution:"Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors", maxZoom:19 },
  { id:"esri-gray-light", name:"Minimal (light)", url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", attribution:"Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors", maxZoom:16 },
  { id:"esri-gray-dark", name:"Minimal (dark)", url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", attribution:"Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors", maxZoom:16 },
  { id:"osm", name:"OpenStreetMap", url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png", attribution:"&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors", maxZoom:19 },
  { id:"esri-imagery", name:"Satellite imagery", url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", attribution:"Imagery &copy; Esri, Maxar, Earthstar Geographics", maxZoom:19 },
  { id:"opentopo", name:"Topographic", url:"https://tile.opentopomap.org/{z}/{x}/{y}.png", attribution:"&copy; <a href=\"https://opentopomap.org\">OpenTopoMap</a> (CC-BY-SA), &copy; OpenStreetMap contributors", maxZoom:17 },
  { id:"blank", name:"None (old map only)", url:"", attribution:"", maxZoom:20 }
];

const JUX_CITIES = [
  {
    id:"london", name:"London", country:"United Kingdom",
    center:[51.50854,-0.09999], zoom:13,
    blurb:"Four and a half centuries of London, from the Tudor woodcut city to Charles Booth’s poverty survey.",
    story:"London is the deepest set here. The Thames barely moves, which makes it an unusually forgiving city to anchor: the river, the Tower and St Paul’s hold still while everything between them is rebuilt. Watch the Great Fire of 1666 fall between the Agas and Hollar sheets, and the railways arrive between 1835 and 1886.",
    anchors:[
      { name:"St Paul’s Cathedral", kind:"built", lat:51.513787, lon:-0.098451, since:1240, note:"Cathedral on this site since the 1240s; Wren’s dome from 1710.", caution:"" },
      { name:"Tower of London", kind:"built", lat:51.508217, lon:-0.076188, since:1078, note:"Norman keep begun 1078; the outline has barely moved.", caution:"" },
      { name:"Westminster Abbey", kind:"built", lat:51.499399, lon:-0.127391, since:1245, note:"Gothic rebuild from 1245, on a much older foundation.", caution:"" },
      { name:"London Bridge", kind:"water", lat:51.508049, lon:-0.087671, since:1209, note:"A crossing here since Roman times; the stone bridge from 1209.", caution:"" },
      { name:"Temple Church", kind:"built", lat:51.513257, lon:-0.110224, since:1185, note:"Consecrated 1185 and visible on the earliest sheets.", caution:"" }
    ],
    overlays:[
      {
        id:"86349", year:1561, label:"c.1561", dated:true,
        title:"Civitas Londinium (the “Agas” map)",
        by:"Attributed to Ralph Agas",
        note:"Woodcut bird’s-eye view of Tudor London, before the Great Fire redrew the City.",
        recordTitle:"Agas map of London",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/86349/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/86349",
        thumb:"https://mapwarper.net/uploads/86349/thumb/Civitas_Londinium_or_The_Agas_Map_of_London.png",
        bounds:[[51.4913421,-0.1519639],[51.5396963,-0.0614144]],
        center:[51.515519,-0.106689], maxNativeZoom:18, px:[4730,2000]
      },
      {
        id:"78149", year:1670, label:"17th c.", dated:false,
        title:"Hollar’s map of 17th-century London",
        by:"After Wenceslaus Hollar",
        note:"Post-Fire London. The source record dates it “1688?” — treat the year as unsettled.",
        recordTitle:"Hollar map of 17th Century London",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/78149/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/78149",
        thumb:"https://mapwarper.net/uploads/78149/thumb/17th_century_map_of_London__28W.Hollar_29_ogkdvzax.png",
        bounds:[[51.4869016,-0.1487894],[51.5347837,-0.0389668]],
        center:[51.510843,-0.093878], maxNativeZoom:18, px:[5500,4382]
      },
      {
        id:"107905", year:1746, label:"1746", dated:true,
        title:"A Plan of the Cities of London and Westminster",
        by:"John Rocque & John Pine, surveyed 1737–46",
        note:"All 24 sheets fused. The first genuinely accurate street survey of London.",
        recordTitle:"London 1746",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/107905/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/107905",
        thumb:"https://mapwarper.net/uploads/107905/thumb/MAP_OF_LONDON__John_Rocque___John_Pine_1737-1746__Fusion_of_all_24_parts__Lord_Henfield__2nd_Edition_2022.png",
        bounds:[[51.4831722,-0.1705754],[51.5357303,-0.0058894]],
        center:[51.509451,-0.088232], maxNativeZoom:18, px:[29999,16175]
      },
      {
        id:"91174", year:1835, label:"1835", dated:true,
        title:"London in 1835",
        by:"Publisher not stated in the record",
        note:"Pre-railway London, just before the termini began carving up the inner suburbs.",
        recordTitle:"London 1835",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/91174/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/91174",
        thumb:"https://mapwarper.net/uploads/91174/thumb/10242002.png",
        bounds:[[51.4591744,-0.2010774],[51.5534587,0.0160426]],
        center:[51.506317,-0.092517], maxNativeZoom:18, px:[22702,15583]
      },
      {
        id:"55847", year:1886, label:"1886", dated:true,
        title:"Stanford’s Library Map of London and its Suburbs",
        by:"Edward Stanford, six inches to the mile",
        note:"Twenty-four sheets at high detail — the classic late-Victorian reference map.",
        recordTitle:"Stanford's Library Map of London and Its Suburbs. 24 Sheets. On the Scale of Six Inches to a Mile. London: Edward Stanford, 55, Charing Cross, S.W.",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/55847/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/55847",
        thumb:"https://mapwarper.net/uploads/55847/thumb/10158007.png",
        bounds:[[51.4014502,-0.2381556],[51.5848513,0.016803]],
        center:[51.493151,-0.110676], maxNativeZoom:18, px:[19978,22673]
      },
      {
        id:"31741", year:1889, label:"c.1889", dated:false,
        title:"Descriptive Map of London Poverty",
        by:"Charles Booth’s survey",
        note:"Streets coloured by income and class. Undated in the record; Booth’s first edition is 1889.",
        recordTitle:"Charles Booth - London - Poverty Map",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/31741/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/31741",
        thumb:"https://mapwarper.net/uploads/31741/thumb/10169000.png",
        bounds:[[51.5030984,-0.0950553],[51.5397597,-0.0171571]],
        center:[51.521429,-0.056106], maxNativeZoom:18, px:[5882,4374]
      }
    ]
  },
  {
    id:"paris", name:"Paris", country:"France",
    center:[48.85802,2.33534], zoom:13,
    blurb:"Renaissance Paris to the Commune barricades, across the Haussmann rebuild.",
    story:"The reason to juxtapose Paris is Haussmann. Slide between 1840 and 1860 and the medieval street network on the Right Bank is replaced by boulevards driven straight through it. The 1871 barricade map then puts an insurrection onto that new geometry. The Seine and the Île de la Cité anchor every sheet.",
    anchors:[
      { name:"Notre-Dame de Paris", kind:"built", lat:48.852937, lon:2.35005, since:1163, note:"Begun 1163 on the Île de la Cité — present on every Paris sheet.", caution:"" },
      { name:"Palais du Louvre", kind:"built", lat:48.861147, lon:2.338028, since:1190, note:"Fortress from 1190, palace thereafter; footprint grew over time.", caution:"" },
      { name:"Pont Neuf", kind:"water", lat:48.857803, lon:2.34192, since:1607, note:"Completed 1607 — later than the 1550 sheet.", caution:"" },
      { name:"Hôtel des Invalides", kind:"built", lat:48.855954, lon:2.313343, since:1671, note:"Built from 1671; a fixed point on the Left Bank.", caution:"" },
      { name:"Place de la Concorde", kind:"built", lat:48.865572, lon:2.321225, since:1755, note:"Laid out from 1755; useful for the 19th-century sheets.", caution:"" },
      { name:"Île de la Cité", kind:"water", lat:48.854705, lon:2.347485, since:0, note:"The island itself — the most stable anchor in Paris.", caution:"" }
    ],
    overlays:[
      {
        id:"87796", year:1550, label:"c.1550", dated:true,
        title:"Plan de Paris (the “Plan de Bâle”)",
        by:"Olivier Truschet & Germain Hoyau",
        note:"Renaissance Paris still inside its walls, drawn in bird’s-eye perspective.",
        recordTitle:"Paris 1550 Truschet and Hoyau",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/87796/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/87796",
        thumb:"https://mapwarper.net/uploads/87796/thumb/Map_of_Paris_by_Truschet_and_Hoyau_-_Basel_University_Library.png",
        bounds:[[48.8303545,2.324373],[48.875852,2.3801459]],
        center:[48.853103,2.352259], maxNativeZoom:18, px:[10890,7820]
      },
      {
        id:"12785", year:1809, label:"1809", dated:false,
        title:"Plan routier de la ville de Paris et de ses faubourgs",
        by:"Charles Picquet",
        note:"Napoleonic Paris. Year read from the source file name, not the catalogue field.",
        recordTitle:"Plan routier de la ville de Paris et de ses faubourgs 3",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/12785/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/12785",
        thumb:"https://mapwarper.net/uploads/12785/thumb/1809_Charles_Picquet_Paris_et_ses_faubourgs.png",
        bounds:[[48.828281,2.2841178],[48.888802,2.4042474]],
        center:[48.858542,2.344183], maxNativeZoom:18, px:[13127,9744]
      },
      {
        id:"84310", year:1823, label:"1823", dated:true,
        title:"Plan routier de la ville de Paris et de ses faubourgs",
        by:"Publisher not stated in the record",
        note:"Restoration Paris, three decades before Haussmann.",
        recordTitle:"Paris 1823",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/84310/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/84310",
        thumb:"https://mapwarper.net/uploads/84310/thumb/master-gmd-gmd5-g5834-g5834p-ct003571.png",
        bounds:[[48.827051,2.2606009],[48.8892497,2.412866]],
        center:[48.85815,2.336733], maxNativeZoom:18, px:[14427,8798]
      },
      {
        id:"21113", year:1840, label:"1840", dated:true,
        title:"Atlas général de la Ville de Paris",
        by:"Théodore Jacoubet",
        note:"The parcel-level atlas Haussmann’s planners actually worked from.",
        recordTitle:"Paris Jacoubet 1840 - updated",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/21113/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/21113",
        thumb:"https://mapwarper.net/uploads/21113/thumb/Jacoubet1840-Gallica-FINAL.png",
        bounds:[[48.8282209,2.2804367],[48.8885408,2.4061441]],
        center:[48.858381,2.34329], maxNativeZoom:18, px:[8599,6238]
      },
      {
        id:"79748", year:1860, label:"1860", dated:true,
        title:"Map of Paris in 1860",
        by:"Publisher not stated in the record",
        note:"The year the city absorbed its suburbs and the boulevards began cutting through.",
        recordTitle:"Paris 1860",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/79748/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/79748",
        thumb:"https://mapwarper.net/uploads/79748/thumb/4807020.png",
        bounds:[[48.8212265,2.2779189],[48.8898005,2.4174007]],
        center:[48.855514,2.34766], maxNativeZoom:18, px:[12361,8945]
      },
      {
        id:"108484", year:1871, label:"1871", dated:true,
        title:"Barricades de la Commune de Paris",
        by:"Compiled after the Commune",
        note:"Barricade positions from the spring of 1871 — a news map of an insurrection.",
        recordTitle:"Barricades de la Commune de Paris 1871",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/108484/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/108484",
        thumb:"https://mapwarper.net/uploads/108484/thumb/Plan_de_Paris_avec_indication_exacte_des_Maisons_et_Monuments_incendi%C3%A9es__sic___des_Batteries_et_Barricades_construites_en_Mai_1871_et_num%C3%A9rotage_des_Bastions_de_l_Enceinte_-_btv1b8494157x.png",
        bounds:[[48.8087349,2.2432443],[48.9056868,2.4312265]],
        center:[48.857211,2.337235], maxNativeZoom:18, px:[11025,8618]
      }
    ]
  },
  {
    id:"rome", name:"Rome", country:"Italy",
    center:[41.89631,12.47479], zoom:13,
    blurb:"Papal Rome to the wartime capital, over the plans that reshaped a city built on its own ruins.",
    story:"Rome rewards juxtaposition because so much of it never moved: the Pantheon, the Colosseum and Castel Sant’Angelo sit where they sat in 1551. What changes is everything between them. Compare 1866 — papal Rome, five years before it became the Italian capital — with 1889, and the ministries, speculative quarters and Tiber embankments have arrived. The river is the anchor to distrust here: its banks were rebuilt from 1876.",
    anchors:[
      { name:"Colosseum", kind:"built", lat:41.890942, lon:12.491903, since:80, note:"Completed AD 80; drawn on every plan of Rome since.", caution:"" },
      { name:"Pantheon", kind:"built", lat:41.898616, lon:12.476833, since:126, note:"Standing since AD 126 — the most precise fixed point in the centre.", caution:"" },
      { name:"St Peter’s Basilica", kind:"built", lat:41.902157, lon:12.45371, since:324, note:"A basilica here since the 4th century; the present church was finished in 1626, so its footprint changes between sheets.", caution:"" },
      { name:"Castel Sant’Angelo", kind:"built", lat:41.903118, lon:12.466343, since:139, note:"Hadrian’s mausoleum, AD 139 — unmoved for nineteen centuries.", caution:"" },
      { name:"Tiber Island", kind:"water", lat:41.89047, lon:12.477765, since:0, note:"The island holds its position, but the banks around it were rebuilt.", caution:"The Tiber embankments were built from 1876 — the riverbanks are not a fixed line." },
      { name:"Capitoline Hill", kind:"relief", lat:41.892578, lon:12.482215, since:0, note:"Terrain, not building — one of the seven hills, above the Forum.", caution:"" }
    ],
    overlays:[
      {
        id:"42336", year:1551, label:"c.1551", dated:false,
        title:"Pianta di Roma (the Bufalini plan)",
        by:"After Leonardo Bufalini",
        note:"The first measured plan of Rome, cut on woodblocks. Undated in the source record; Bufalini's plan is 1551.",
        recordTitle:"Bufalini - map of Rome 3",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/42336/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/42336",
        thumb:"https://mapwarper.net/uploads/42336/thumb/Bufalini_-_stitched_-_flattened__kl_1.png",
        bounds:[[41.8579801,12.4428675],[41.9251496,12.546997]],
        center:[41.891565,12.494932], maxNativeZoom:18, px:[3898,3731]
      },
      {
        id:"9175", year:1748, label:"c.1748", dated:false,
        title:"La Nuova Topografia di Roma (the Nolli plan)",
        by:"Giambattista Nolli",
        note:"The famous figure-ground plan: churches and courtyards drawn as public space. Undated in the record; Nolli's plan is 1748.",
        recordTitle:"Rome (Nolli)",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/9175/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/9175",
        thumb:"https://mapwarper.net/uploads/9175/thumb/nolli-rome-melville-map.png",
        bounds:[[41.8626281,12.4413659],[41.9211831,12.5268237]],
        center:[41.891906,12.484095], maxNativeZoom:18, px:[8313,7000]
      },
      {
        id:"106493", year:1866, label:"1866", dated:true,
        title:"Pianta topografica di Roma e suoi contorni",
        by:"Direzione Generale del Censo",
        note:"Cadastral survey of papal Rome at 19,150 px wide — five years before the city became the Italian capital.",
        recordTitle:"Pianta topografica di Roma e suoi contorni, Direzione Generale del Censo, 1866",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/106493/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/106493",
        thumb:"https://mapwarper.net/uploads/106493/thumb/11956000.png",
        bounds:[[41.8712892,12.442781],[41.9143866,12.5220302]],
        center:[41.892838,12.482406], maxNativeZoom:18, px:[19150,14490]
      },
      {
        id:"85774", year:1883, label:"1883", dated:true,
        title:"Rome, 1883",
        by:"Publisher not stated in the record",
        note:"Rome as the new national capital, as ministries and speculative quarters go up.",
        recordTitle:"Rome 1883",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/85774/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/85774",
        thumb:"https://mapwarper.net/uploads/85774/thumb/Rome_1883.png",
        bounds:[[41.8613368,12.4315672],[41.9212525,12.5422361]],
        center:[41.891295,12.486902], maxNativeZoom:18, px:[9060,6415]
      },
      {
        id:"108397", year:1889, label:"1889", dated:true,
        title:"Rome en 1889",
        by:"Publisher not stated in the record",
        note:"The post-unification building boom, with the Tiber embankments under construction.",
        recordTitle:"Rome en 1889",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/108397/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/108397",
        thumb:"https://mapwarper.net/uploads/108397/thumb/Rome_1889_copie.png",
        bounds:[[41.8658572,12.4342796],[41.9229722,12.5312636]],
        center:[41.894415,12.482772], maxNativeZoom:18, px:[7379,5826]
      },
      {
        id:"67999", year:1944, label:"1944", dated:true,
        title:"Rome, 1944",
        by:"Publisher not stated in the record",
        note:"Wartime Rome. The Fascist-era avenues have already been driven through the old centre.",
        recordTitle:"Rome 1944",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/67999/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/67999",
        thumb:"https://mapwarper.net/uploads/67999/thumb/roma1944_utex.png",
        bounds:[[41.8615846,12.4481823],[41.9450038,12.543989]],
        center:[41.903294,12.496086], maxNativeZoom:18, px:[4888,5778]
      }
    ]
  },
  {
    id:"lisbon", name:"Lisbon", country:"Portugal",
    center:[38.70588,-9.15984], zoom:13,
    blurb:"Tinoco’s 1650 plan to the modern port, across the earthquake that erased the old city and the docks that pushed back the river.",
    story:"Lisbon’s break is 1755. The earthquake, fire and tsunami destroyed the Baixa, and Pombal’s engineers rebuilt it on a grid that ignored the old streets: slide between the 1650 Tinoco plan and the 1812 sheet and the medieval lanes between the castle and the river are replaced by straight blocks. The castle, the Sé and the Carmo convent sit still through all of it — the Carmo as a roofless ruin after 1755. The riverfront is the line not to trust. The Aterro da Boavista (1858–65) and the port works from 1887 filled in the Tagus foreshore west of the Praça do Comércio, so the two Admiralty charts disagree about where the water is.",
    anchors:[
      { name:"Castelo de São Jorge", kind:"built", lat:38.7139258, lon:-9.133483, since:1100, note:"Moorish hilltop citadel, taken in 1147; its walls have kept their line on every sheet.", caution:"" },
      { name:"Sé de Lisboa", kind:"built", lat:38.7098185, lon:-9.1328001, since:1147, note:"Begun 1147, just after the conquest; it came through the 1755 earthquake with its towers standing.", caution:"" },
      { name:"Praça do Comércio", kind:"built", lat:38.7077151, lon:-9.1365238, since:1500, note:"The riverside palace square (Terreiro do Paço) from c.1500; rebuilt as the Pombaline square after 1755.", caution:"" },
      { name:"Rossio", kind:"built", lat:38.7137564, lon:-9.1393431, since:1300, note:"The city’s main square since the Middle Ages; the Pombaline grid was laid out around it after 1755.", caution:"" },
      { name:"Convento do Carmo", kind:"built", lat:38.712006, lon:-9.1405862, since:1389, note:"Founded 1389. The church lost its roof in the 1755 earthquake and was left as a ruin — it stands whole on the 1650 sheet.", caution:"" },
      { name:"Mosteiro dos Jerónimos", kind:"built", lat:38.6977531, lon:-9.2055912, since:1501, note:"Begun 1501 at Belém, well west of the walled city; it fixes the western sheets.", caution:"" },
      { name:"Torre de Belém", kind:"built", lat:38.691586, lon:-9.2159288, since:1519, note:"Finished 1519 on an islet in the river; the shore has since advanced to meet it.", caution:"" },
      { name:"Doca de Alcântara", kind:"water", lat:38.7005088, lon:-9.174486, since:0, note:"The 1887 docks, dug into reclaimed riverbed. On the 1650 and 1812 sheets this is open water.", caution:"Built from 1887 on filled riverbed — the Tagus shoreline here moved several hundred metres. Not a control point." }
    ],
    overlays:[
      {
        id:"77661", year:1650, label:"1650", dated:true,
        title:"Planta de Lisboa em 1650 (the Tinoco plan)",
        by:"After João Nunes Tinoco; Museu de Lisboa copy",
        note:"The earliest measured plan of the city, a century before the 1755 earthquake and the Pombaline rebuild flattened the Baixa.",
        recordTitle:"Lisboa 1650",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/77661/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/77661",
        thumb:"https://mapwarper.net/uploads/77661/thumb/tinoco-clean-grayscale.png",
        bounds:[[38.700672,-9.1476594],[38.7201281,-9.1227549]],
        center:[38.7104,-9.135207], maxNativeZoom:17, px:[4220,3203]
      },
      {
        id:"78043", year:1650, label:"1650", dated:true,
        title:"Lisboa em 1650, redrawn",
        by:"Mário Xavier de Brito, after Tinoco (Revista Municipal)",
        note:"A 20th-century clean redrawing of the Tinoco plan — far easier to read than the original. Use it to decode the sheet above, not as independent evidence.",
        recordTitle:"Lisboa de outros tempos",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/78043/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/78043",
        thumb:"https://mapwarper.net/uploads/78043/thumb/N56_0048_branca_t0_wcbrmzjd.png",
        bounds:[[38.704005,-9.1487092],[38.7216431,-9.120889]],
        center:[38.712824,-9.134799], maxNativeZoom:16, px:[1790,1200]
      },
      {
        id:"157", year:1812, label:"c.1812", dated:true,
        title:"Plano geral da cidade de Lisboa em 1812",
        by:"Biblioteca Nacional de Portugal, via Wikimedia Commons",
        note:"Post-earthquake Lisbon: the Pombaline grid is in place and the city still ends near Alcântara. A small scan — it runs out of detail at about zoom 14.",
        recordTitle:"File:Plano geral da cidade de Lisboa em 1812.jpg",
        archive:"Wikimaps Warper",
        tiles:"https://warper.wmflabs.org/maps/tile/157/{z}/{x}/{y}.png",
        page:"https://warper.wmflabs.org/maps/157",
        thumb:"",
        bounds:[[38.69277075494134,-9.183987938111763],[38.73856919335047,-9.10903597797321]],
        center:[38.71567,-9.146512], maxNativeZoom:14, px:[1263,899]
      },
      {
        id:"5795", year:1871, label:"1871", dated:true,
        title:"Admiralty Chart 89: Entrance to the Tagus and Lisbon Harbour",
        by:"British Admiralty, via Wikimedia Commons",
        note:"The estuary from the bar at the river mouth up to the city: soundings, forts and the shoreline before the port works began in 1887.",
        recordTitle:"File:Admiralty Chart No 89 Entrance to the Tagus and Lisbon Harbour, Published 1871.jpg",
        archive:"Wikimaps Warper",
        tiles:"https://warper.wmflabs.org/maps/tile/5795/{z}/{x}/{y}.png",
        page:"https://warper.wmflabs.org/maps/5795",
        thumb:"",
        bounds:[[38.5693231,-9.5030427],[38.7662516,-9.0309471]],
        center:[38.667787,-9.266995], maxNativeZoom:15, px:[15117,8034]
      },
      {
        id:"22024", year:1911, label:"undated", dated:false,
        title:"Lisbon, assembled survey sheets",
        by:"Publisher not stated in the record",
        note:"Carries no date or source in the record. The coloured 1:1000 sheets and their grid match the municipal survey of 1904–11; placed here by style, not evidence. The black areas are the scan’s margins outside the sheet grid, not the map.",
        recordTitle:"Lisbon",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/22024/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/22024",
        thumb:"https://mapwarper.net/uploads/22024/thumb/Grelha-300DPI_reduzida.png",
        bounds:[[38.6911038,-9.2164079],[38.7406351,-9.1053498]],
        center:[38.715869,-9.160879], maxNativeZoom:18, px:[21260,12117]
      },
      {
        id:"6096", year:1971, label:"1971", dated:true,
        title:"Admiralty Chart 3264: Port of Lisbon",
        by:"British Admiralty, via Wikimedia Commons",
        note:"The modern port: Alcântara and Santos docks on filled riverbed, and the 1966 bridge across the Tagus. Set it against 1871 and the shoreline has moved.",
        recordTitle:"File:Admiralty Chart No 3264 Port of Lisbon, Published 1971.jpg",
        archive:"Wikimaps Warper",
        tiles:"https://warper.wmflabs.org/maps/tile/6096/{z}/{x}/{y}.png",
        page:"https://warper.wmflabs.org/maps/6096",
        thumb:"",
        bounds:[[38.6316571,-9.250459],[38.792042,-8.9486463]],
        center:[38.71185,-9.099553], maxNativeZoom:16, px:[16473,11254]
      }
    ]
  },
  {
    id:"istanbul", name:"Istanbul", country:"Türkiye",
    center:[41.02067,28.9752], zoom:13,
    blurb:"Late-Ottoman Istanbul through the Balkan Wars, the First World War and the end of empire.",
    story:"A tight thirty-year window on a city about to change hands politically. The peninsula’s monuments — Hagia Sophia, Süleymaniye, Topkapı — are exceptionally good anchors because they are large, old and unmoved. The waterline of the Golden Horn is the feature to watch.",
    anchors:[
      { name:"Hagia Sophia", kind:"built", lat:41.008505, lon:28.980011, since:537, note:"Standing since 537; the strongest anchor on the peninsula.", caution:"" },
      { name:"Topkapı Palace", kind:"built", lat:41.011344, lon:28.983203, since:1459, note:"Begun 1459 on the seraglio point.", caution:"" },
      { name:"Galata Tower", kind:"built", lat:41.025641, lon:28.974213, since:1348, note:"Genoese tower of 1348, north of the Golden Horn.", caution:"" },
      { name:"Süleymaniye Mosque", kind:"built", lat:41.016229, lon:28.963955, since:1557, note:"Sinan’s complex, completed 1557, on the third hill.", caution:"" },
      { name:"Golden Horn", kind:"water", lat:41.041155, lon:28.945785, since:0, note:"The inlet itself; its quays were reshaped in the 20th century.", caution:"The quays were reshaped in the 20th century. Anchor on the monuments instead." },
      { name:"Maiden’s Tower", kind:"water", lat:41.021138, lon:29.004058, since:1110, note:"Islet tower in the Bosphorus — an offshore fixed point.", caution:"" }
    ],
    overlays:[
      {
        id:"105894", year:1895, label:"1890s", dated:true,
        title:"Map of Istanbul, 1890s",
        by:"Publisher not stated in the record",
        note:"Late-Ottoman Istanbul before the fires and rebuilding of the 1900s.",
        recordTitle:"Istanbul Map 1890s",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/105894/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/105894",
        thumb:"https://mapwarper.net/uploads/105894/thumb/30._1890s.png",
        bounds:[[40.9710232,28.889538],[41.056606,29.0872259]],
        center:[41.013815,28.988382], maxNativeZoom:18, px:[23450,13434]
      },
      {
        id:"52663", year:1912, label:"1912–13", dated:true,
        title:"Istanbul, 1912–13",
        by:"Publisher not stated in the record",
        note:"The Balkan Wars years. Tiles are served to zoom 14; deeper zooms are upscaled.",
        recordTitle:"Istanbul 1912-13 Map, December 2020",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/52663/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/52663",
        thumb:"https://mapwarper.net/uploads/52663/thumb/o122419225-A.Sueda_Yilmaz.png",
        bounds:[[40.9821496,28.9036274],[41.0682053,29.0552463]],
        center:[41.025177,28.979437], maxNativeZoom:14, px:[12000,9728]
      },
      {
        id:"81836", year:1917, label:"1917", dated:true,
        title:"Istanbul, 1917",
        by:"Publisher not stated in the record",
        note:"Wartime Istanbul in the last years of the empire.",
        recordTitle:"1917 Istanbul",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/81836/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/81836",
        thumb:"https://mapwarper.net/uploads/81836/thumb/nla.obj-2971954557.png",
        bounds:[[40.9335619,28.8928115],[41.0500614,29.0787641]],
        center:[40.991812,28.985788], maxNativeZoom:18, px:[14480,12034]
      },
      {
        id:"101822", year:1918, label:"undated", dated:false,
        title:"Map of Istanbul by Necip Bey",
        by:"Necip Bey",
        note:"Carries no date in the source record. Placed here by cartographic style, not evidence.",
        recordTitle:"Map of Istanbul by Necip Bey",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/101822/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/101822",
        thumb:"https://mapwarper.net/uploads/101822/thumb/6a6vgbov20271.png",
        bounds:[[40.945512,28.8812648],[41.1048632,29.1014887]],
        center:[41.025188,28.991377], maxNativeZoom:18, px:[8349,7864]
      },
      {
        id:"49587", year:1922, label:"1922", dated:true,
        title:"Istanbul, 1922",
        by:"Publisher not stated in the record",
        note:"The year before the republic; the city on the eve of losing capital status.",
        recordTitle:"1922- Istanbul",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/49587/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/49587",
        thumb:"https://mapwarper.net/uploads/49587/thumb/1922-_harita.png",
        bounds:[[40.9725482,28.8737531],[41.0979239,29.0804503]],
        center:[41.035236,28.977102], maxNativeZoom:18, px:[7284,5043]
      }
    ]
  },
  {
    id:"jerusalem", name:"Jerusalem", country:"",
    center:[31.77836,35.23215], zoom:15,
    blurb:"The walled city and its environs, from 1815 through the end of the British Mandate.",
    story:"Jerusalem’s Old City walls and gates have held their position since the 16th century, which makes them close to ideal control points. The interest is outside them: compare 1815 with 1947 and the city spreads far beyond the walls. Sheets here differ sharply in extent — some cover only the Old City.",
    anchors:[
      { name:"Dome of the Rock", kind:"built", lat:31.778017, lon:35.235296, since:691, note:"Completed 691; the octagon is unmistakable on old sheets.", caution:"" },
      { name:"Damascus Gate", kind:"built", lat:31.781673, lon:35.230453, since:1537, note:"Ottoman gate of 1537 in the north wall.", caution:"" },
      { name:"Jaffa Gate", kind:"built", lat:31.776562, lon:35.227271, since:1538, note:"Ottoman gate of 1538 in the west wall.", caution:"" },
      { name:"Holy Sepulchre", kind:"built", lat:31.778352, lon:35.229762, since:335, note:"On this site since 335; drawn on nearly every map of the city.", caution:"" },
      { name:"Mount of Olives", kind:"relief", lat:31.779536, lon:35.2418, since:0, note:"Terrain, not building — the ridge east of the Old City.", caution:"" },
      { name:"Tower of David", kind:"built", lat:31.776039, lon:35.228302, since:1310, note:"Citadel by the Jaffa Gate; Herodian base, Mamluk rebuild.", caution:"" }
    ],
    overlays:[
      {
        id:"91816", year:1815, label:"1815", dated:true,
        title:"Jerusalem, 1815",
        by:"Publisher not stated in the record",
        note:"The walled city before 19th-century European surveying arrived.",
        recordTitle:"Jerusalem 1815",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/91816/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/91816",
        thumb:"https://mapwarper.net/uploads/91816/thumb/0497010.png",
        bounds:[[31.7319329,35.2023955],[31.8081437,35.2674923]],
        center:[31.770038,35.234944], maxNativeZoom:18, px:[3893,5099]
      },
      {
        id:"91812", year:1901, label:"1901", dated:true,
        title:"Jerusalem, 1901",
        by:"Publisher not stated in the record",
        note:"Late Ottoman Jerusalem, as building outside the walls accelerates.",
        recordTitle:"Jerusalem 1901",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/91812/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/91812",
        thumb:"https://mapwarper.net/uploads/91812/thumb/Jerusalem1901.png",
        bounds:[[31.7650542,35.2198372],[31.7853143,35.2480322]],
        center:[31.775184,35.233935], maxNativeZoom:18, px:[2291,1873]
      },
      {
        id:"39933", year:1917, label:"1917", dated:true,
        title:"Environs of Jerusalem",
        by:"Publisher not stated in the record",
        note:"Covers the surrounding country, not just the Old City — useful for terrain anchoring.",
        recordTitle:"Jerusalem 1917",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/39933/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/39933",
        thumb:"https://mapwarper.net/uploads/39933/thumb/Environs_of_Jerusalem-NLI.png",
        bounds:[[31.7512355,35.1830576],[31.8317202,35.261917]],
        center:[31.791478,35.222487], maxNativeZoom:18, px:[10091,7744]
      },
      {
        id:"39934", year:1947, label:"1947", dated:true,
        title:"Jerusalem, Survey of Palestine",
        by:"Reproduced and printed by the Survey of Palestine",
        note:"The last full mandate-era survey sheet of the city.",
        recordTitle:"Jerusalem 1947",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/39934/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/39934",
        thumb:"https://mapwarper.net/uploads/39934/thumb/Jerusalem_Reproduced_and_printed_by_survey_of_Palestine.png",
        bounds:[[31.7468737,35.2082462],[31.7994175,35.2409316]],
        center:[31.773146,35.224589], maxNativeZoom:18, px:[2347,4388]
      }
    ]
  },
  {
    id:"capetown", name:"Cape Town", country:"South Africa",
    center:[-33.92428,18.42273], zoom:13,
    blurb:"The Cape charted from the sea, across the reclamation that pushed Table Bay’s shoreline outwards.",
    story:"Cape Town is charted here mostly from the water: three British Admiralty sheets and one town plan. They span the Foreshore reclamation, the mid-20th-century scheme that filled in the head of Table Bay and pushed the shoreline well beyond its historic line. Set the 1943 docks chart against 1966 and the new ground appears. The Castle of Good Hope is the anchor to watch — built at the water’s edge in the 1660s, it now sits inland. Table Mountain behind it has not moved at all.",
    anchors:[
      { name:"Table Mountain", kind:"relief", lat:-33.959063, lon:18.403872, since:0, note:"Terrain, not building — the one feature every chart of the bay agrees on.", caution:"" },
      { name:"Signal Hill", kind:"relief", lat:-33.917003, lon:18.403914, since:0, note:"The ridge above the old town; a dependable relief anchor.", caution:"" },
      { name:"Castle of Good Hope", kind:"built", lat:-33.925851, lon:18.426726, since:1666, note:"Built 1666–79 at the water’s edge; reclamation later left it inland. Its pentagon is unmistakable on old charts.", caution:"" },
      { name:"Company’s Garden", kind:"built", lat:-33.927215, lon:18.417334, since:1652, note:"Planted by the Dutch East India Company from 1652 — the oldest laid-out space in the city.", caution:"" },
      { name:"Grand Parade", kind:"built", lat:-33.924871, lon:18.424797, since:1700, note:"The old parade ground below the Castle, open since the 18th century.", caution:"" },
      { name:"Table Bay", kind:"water", lat:-33.891667, lon:18.459722, since:0, note:"The bay itself. Its southern head was reclaimed, not merely resurveyed.", caution:"The Foreshore was reclaimed from the 1930s — this shoreline moved a long way. Not a control point." }
    ],
    overlays:[
      {
        id:"38596", year:1880, label:"1880", dated:true,
        title:"Cape Town, 1880",
        by:"Publisher not stated in the record",
        note:"The only street plan in this set. A small scan — it runs out of detail at about zoom 14.",
        recordTitle:"Cape Town South Africa 1880",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/38596/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/38596",
        thumb:"https://mapwarper.net/uploads/38596/thumb/Cape_town_1880s.png",
        bounds:[[-33.9535683,18.3890532],[-33.8988983,18.454157]],
        center:[-33.926233,18.421605], maxNativeZoom:14, px:[990,990]
      },
      {
        id:"7100", year:1921, label:"1870/1921", dated:true,
        title:"Admiralty Chart 636: The Cape of Good Hope and False Bay",
        by:"British Admiralty, via Wikimedia Commons",
        note:"Published 1870; this sheet is the 1921 new edition. Covers the whole peninsula and both coasts.",
        recordTitle:"File:Admiralty Chart No 636 The Cape of Good Hope and False Bay, Published 1870, New Edition 1921.jpg",
        archive:"Wikimaps Warper",
        tiles:"https://warper.wmflabs.org/maps/tile/7100/{z}/{x}/{y}.png",
        page:"https://warper.wmflabs.org/maps/7100",
        thumb:"",
        bounds:[[-34.5016062,17.9582664],[-33.7110948,18.8915003]],
        center:[-34.10635,18.424883], maxNativeZoom:15, px:[16175,16599]
      },
      {
        id:"5873", year:1943, label:"1943", dated:true,
        title:"Admiralty Chart 123: Table Bay Docks and Approaches",
        by:"British Admiralty, via Wikimedia Commons",
        note:"The docks at war, charted just before the Foreshore scheme filled in the bay behind them.",
        recordTitle:"File:Admiralty Chart No 123 Table Bay Docks and Approaches, Published 1943.jpg",
        archive:"Wikimaps Warper",
        tiles:"https://warper.wmflabs.org/maps/tile/5873/{z}/{x}/{y}.png",
        page:"https://warper.wmflabs.org/maps/5873",
        thumb:"",
        bounds:[[-33.931113,18.4159574],[-33.8851052,18.4541818]],
        center:[-33.908109,18.43507], maxNativeZoom:18, px:[11065,16271]
      },
      {
        id:"4555", year:1966, label:"1966", dated:true,
        title:"Admiralty Chart 1920: Table Bay",
        by:"British Admiralty, via Wikimedia Commons",
        note:"After reclamation. Set this against the 1943 sheet and the new land appears.",
        recordTitle:"File:Admiralty Chart No 1920 Table Bay, Published 1966.jpg",
        archive:"Wikimaps Warper",
        tiles:"https://warper.wmflabs.org/maps/tile/4555/{z}/{x}/{y}.png",
        page:"https://warper.wmflabs.org/maps/4555",
        thumb:"",
        bounds:[[-33.9796799,18.3090894],[-33.6932923,18.5428475]],
        center:[-33.836486,18.425968], maxNativeZoom:16, px:[11238,16397]
      }
    ]
  },
  {
    id:"mumbai", name:"Mumbai", country:"India",
    center:[18.95872,72.82565], zoom:13,
    blurb:"Bombay’s seven islands becoming one city, through a century of land reclamation.",
    story:"This is the set where the coastline itself is the story. Between 1827 and 1933 the sea between the islands is filled in, so the shoreline is not a reliable anchor — it is the thing being measured. Anchor on Malabar Hill and the inland street grid instead, then watch Back Bay change shape underneath them.",
    anchors:[
      { name:"Chhatrapati Shivaji Terminus", kind:"built", lat:18.939856, lon:72.835519, since:1888, note:"Opened 1888 — absent from the 1827 and 1855 sheets.", caution:"" },
      { name:"Malabar Hill", kind:"relief", lat:18.958162, lon:72.803366, since:0, note:"High ground; the most stable anchor on the island.", caution:"" },
      { name:"Back Bay", kind:"water", lat:18.940555, lon:72.811791, since:0, note:"Do not anchor here — this shoreline was reclaimed and moved.", caution:"Reclaimed shoreline — this line moved. Not a reliable control point." },
      { name:"Colaba", kind:"built", lat:18.915091, lon:72.825969, since:0, note:"Once a separate island, joined by causeway in 1838.", caution:"A separate island until the 1838 causeway — expect it detached on early sheets." },
      { name:"Mahim Bay", kind:"water", lat:19.03145, lon:72.827425, since:0, note:"Northern water gap, progressively narrowed by reclamation.", caution:"Progressively narrowed by reclamation; the waterline is not fixed." },
      { name:"Mazagon", kind:"built", lat:18.96718, lon:72.849801, since:0, note:"Another of the seven islands, absorbed into the landmass.", caution:"" }
    ],
    overlays:[
      {
        id:"39408", year:1827, label:"1827", dated:true,
        title:"Bombay Fort, 1827",
        by:"Publisher not stated in the record",
        note:"The fortified town before the ramparts came down in the 1860s.",
        recordTitle:"Bombay 1827",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/39408/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/39408",
        thumb:"https://mapwarper.net/uploads/39408/thumb/1827_BOMBAY_FORT.png",
        bounds:[[18.9211677,72.8228755],[18.9506259,72.8419139]],
        center:[18.935897,72.832395], maxNativeZoom:18, px:[11300,6000]
      },
      {
        id:"42741", year:1855, label:"1855", dated:true,
        title:"Map of the Native Town of Bombay",
        by:"Publisher not stated in the record",
        note:"Dense survey of the northern town, drawn before the great reclamations.",
        recordTitle:"Map of the Native Town of Bombay 1855",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/42741/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/42741",
        thumb:"https://mapwarper.net/uploads/42741/thumb/1855_Native_Town.png",
        bounds:[[18.9353227,72.8105052],[18.9784713,72.8527185]],
        center:[18.956897,72.831612], maxNativeZoom:18, px:[12629,10696]
      },
      {
        id:"34127", year:1919, label:"1919", dated:true,
        title:"Bombay, 1919",
        by:"Publisher not stated in the record",
        note:"After Back Bay and Mazagon reclamation — compare the shoreline with 1827.",
        recordTitle:"Bombay 1919",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/34127/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/34127",
        thumb:"https://mapwarper.net/uploads/34127/thumb/Bombay1919.png",
        bounds:[[18.888886,72.7899736],[19.0547354,72.8844813]],
        center:[18.971811,72.837227], maxNativeZoom:18, px:[8221,15000]
      },
      {
        id:"54898", year:1931, label:"1931", dated:true,
        title:"Bombay, 1931",
        by:"Publisher not stated in the record",
        note:"Interwar Bombay, with the reclaimed foreshore laid out for building.",
        recordTitle:"Bombay 1931",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/54898/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/54898",
        thumb:"https://mapwarper.net/uploads/54898/thumb/bombay_001.png",
        bounds:[[18.8872974,72.7662125],[19.0559159,72.9029496]],
        center:[18.971607,72.834581], maxNativeZoom:18, px:[4547,6114]
      },
      {
        id:"29682", year:1933, label:"1933", dated:true,
        title:"Bombay Guide Map, with part of Salsette Island",
        by:"Survey of India style guide map",
        note:"Widest extent of the set — reaches north into Salsette.",
        recordTitle:"Bombay Guide Map including Part of Salsette Island 1933",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/29682/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/29682",
        thumb:"https://mapwarper.net/uploads/29682/thumb/mumbai.png",
        bounds:[[18.8768984,72.7664194],[19.1232713,72.9683671]],
        center:[19.000085,72.867393], maxNativeZoom:18, px:[4531,6000]
      }
    ]
  },
  {
    id:"mexicocity", name:"Mexico City", country:"Mexico",
    center:[19.43261,-99.14496], zoom:13,
    blurb:"The colonial capital on a drained lake bed, growing across the Valley of Mexico.",
    story:"Mexico City sits on the bed of a drained lake, and it is sinking — unevenly. The colonial grid around the Zócalo is stable enough to anchor on, but the ground under it has dropped metres since 1793. Compare the 1894 drainage plan with the 1955 sheet to see the valley fill in.",
    anchors:[
      { name:"Zócalo", kind:"built", lat:19.432647, lon:-99.133199, since:1524, note:"The main square, laid out in 1524 on the Aztec centre.", caution:"" },
      { name:"Catedral Metropolitana", kind:"built", lat:19.434382, lon:-99.133065, since:1573, note:"Built 1573–1813; it has visibly subsided since.", caution:"" },
      { name:"Alameda Central", kind:"built", lat:19.435716, lon:-99.143991, since:1592, note:"Public park since 1592 — a clear shape on colonial sheets.", caution:"" },
      { name:"Chapultepec", kind:"relief", lat:19.420463, lon:-99.182087, since:1785, note:"Hilltop castle from 1785, west of the historic centre.", caution:"" },
      { name:"Templo Mayor", kind:"built", lat:19.435062, lon:-99.131432, since:0, note:"Aztec precinct, buried after 1521 and excavated from 1978.", caution:"" },
      { name:"Paseo de la Reforma", kind:"built", lat:19.437388, lon:-99.145975, since:1864, note:"Cut through from 1864 — absent on the 1793 sheet.", caution:"" }
    ],
    overlays:[
      {
        id:"30271", year:1793, label:"1793", dated:true,
        title:"Plan General de la Ciudad de México",
        by:"Rare Maps Collection, LLILAS Benson, UT Austin",
        note:"Late-colonial capital on the drained lake bed, still compact around the Zócalo.",
        recordTitle:"Plan General de la Ciudad de Mexico (Colored)",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/30271/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/30271",
        thumb:"https://mapwarper.net/uploads/30271/thumb/blac_M_972_53_1793_mexicocity_color.png",
        bounds:[[19.4117462,-99.1630865],[19.4655433,-99.1130469]],
        center:[19.438645,-99.138067], maxNativeZoom:18, px:[8913,7968]
      },
      {
        id:"60811", year:1886, label:"1886", dated:true,
        title:"Mexico City, 1886",
        by:"Publisher not stated in the record",
        note:"Porfirian city, before the drainage works transformed the valley.",
        recordTitle:"Mexico City 1886",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/60811/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/60811",
        thumb:"https://mapwarper.net/uploads/60811/thumb/11149000.png",
        bounds:[[19.4148776,-99.1691638],[19.4566425,-99.1121527]],
        center:[19.43576,-99.140658], maxNativeZoom:18, px:[2373,1769]
      },
      {
        id:"70242", year:1894, label:"1894", dated:true,
        title:"Plano que indica las calles donde hay atarjeas",
        by:"Comisión de Saneamiento",
        note:"Sewer and drainage plan: street width and pipe depth, block by block.",
        recordTitle:"Plano de la Ciudad de Mexico Que Indica Las Calles Donde Hay Atarjeas 1894",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/70242/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/70242",
        thumb:"https://mapwarper.net/uploads/70242/thumb/Plano_de_la_Ciudad_de_Mexico_Que_Indica_Las_Calles_Donde_Hay_Atarjeas_1894.png",
        bounds:[[19.4171864,-99.177658],[19.4595096,-99.1150272]],
        center:[19.438348,-99.146343], maxNativeZoom:18, px:[19271,13929]
      },
      {
        id:"82837", year:1907, label:"1907", dated:true,
        title:"Plano de la Ciudad de México, 1907",
        by:"Compañía Litográfica y Tipográfica",
        note:"Relief shown by hachures. The source sheet is torn and brittle at the folds.",
        recordTitle:"Plano de la Ciudad de Mexico",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/82837/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/82837",
        thumb:"https://mapwarper.net/uploads/82837/thumb/plano_de_la_ciudad_de_mexico_1907_larger.png",
        bounds:[[19.3839066,-99.2110187],[19.4637905,-99.1068997]],
        center:[19.423849,-99.158959], maxNativeZoom:18, px:[4127,3150]
      },
      {
        id:"71780", year:1955, label:"1955", dated:true,
        title:"Mexico City, 1955",
        by:"Publisher not stated in the record",
        note:"Mid-century sprawl across the valley — the widest extent in this set.",
        recordTitle:"Mexico City 1955",
        archive:"Map Warper",
        tiles:"https://mapwarper.net/maps/tile/71780/{z}/{x}/{y}.png",
        page:"https://mapwarper.net/maps/71780",
        thumb:"https://mapwarper.net/uploads/71780/thumb/default_jdtbsnqi.png",
        bounds:[[19.2613828,-99.2457759],[19.5170676,-99.0604295]],
        center:[19.389225,-99.153103], maxNativeZoom:18, px:[6177,8999]
      }
    ]
  }
];
