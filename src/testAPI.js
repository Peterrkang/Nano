const testAPI = [
  {
    id: 1,
    url: "https://www.madebydocs.com/we-accept-xrb.html",
    product: "Toothpastes",
    name: "Made by Docs",
    location: "Worldwide",
    logo: "madebydocs.png"
  },
  {
    id: 2,
    url: "https://raigames.io/",
    product: "Gambling",
    name: "RaiGames",
    location: "Worldwide",
    logo: "raigames.png"
  },
  {
    id: 3,
    url: "https://blockfevr.com/game/dice/XRB",
    product: "Gambling",
    name: "BlockFevr",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 4,
    url: "https://lacicloud.net/",
    product: "Cloud Storage and Web Hosting",
    name: "LaciCloud",
    location: "Worldwide",
    logo: "laci.png"
  },
  {
    id: 5,
    url: "https://rauchroad.com/",
    product: "Sunglasses",
    name: "RauchRoad",
    location: "USA",
    logo: "rauchroad.png"
  },
  {
    id: 6,
    url: "https://www.joshjungle.com/",
    product: "Fresh Peppers",
    name: "Josh's Jungle",
    location: "Worldwide",
    logo: "joshjungle.png"
  },
  {
    id: 7,
    url: "https://www.raidots.live/",
    product: "Gambling",
    name: "RaiDots",
    location: "Worldwide",
    logo: "raidots.png"
  },
  {
    id: 8,
    url: "https://eternitytower.net/",
    product: "Web Game",
    name: "Eternity Tower",
    location: "Worldwide",
    logo: "eternitytower.png"
  },
  {
    id: 9,
    url: "https://www.etsy.com/no-en/shop/CryptoCatDad",
    product: "Cat Toy",
    name: "CryptoCatDad",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 10,
    url: "http://www.growingopportunitiesinternational.org/donate.html",
    product: "Charity",
    name: "Growing Opportunities International",
    location: "Worldwide",
    logo: "growingopportunities.png"
  },
  {
    id: 11,
    url: "http://www.smallsoundbigsound.com/new-for-2018-pay-with-raiblocks/",
    product: "Guitar Pedals",
    name: "smallsound/bigsound",
    location: "Worldwide",
    logo: "smallsoundbigsound.png"
  },
  {
    id: 12,
    url: "http://cohomologylabs.tech/",
    product: "DApp Development",
    name: "Cohomology Labs",
    location: "Worldwide",
    logo: "cohomologylabs.png"
  },
  {
    id: 13,
    url: "https://late-apex-racing.com/pages/home-tracks",
    product: "Motorsport Apparel",
    name: "Late Apex",
    location: "Worldwide",
    logo: "lateapex.png"
  },
  {
    id: 14,
    url: "http://www.naturkost-leiferde.de/",
    product: "Organic Food",
    name: "Naturkost Leiferde",
    location: "Germany",
    logo: "naturkostleiferde.png"
  },
  {
    id: 15,
    url: "https://www.headphones.com/",
    product: "Headphones",
    name: "Headphones.com",
    location: "USA",
    logo: "headphones.png"
  },
  {
    id: 16,
    url: "https://www.robandlizzie.com/",
    product: "Wedding Photography",
    name: "Rob and Lizzie",
    location: "Worldwide",
    logo: "robandlizzie.png"
  },
  {
    id: 17,
    url: "https://www.medbooks.cz/",
    product: "Medical Books",
    name: "Medbooks.cz",
    location: "Worldwide",
    logo: "medbooks.png"
  },
  {
    id: 18,
    url: "http://www.desertislandsurvival.com/",
    product: "Island Expeditions",
    name: "Desert Island Survival",
    location: "Worldwide",
    logo: "desertislandsurvival.png"
  },
  {
    id: 19,
    url: "http://rahstraps.bigcartel.com/pay-with-raiblocks-20-off",
    product: "Camera Straps",
    name: "Rah Straps",
    location: "Worldwide",
    logo: "rahstraps.png"
  },
  {
    id: 20,
    url: "https://www.hitsteps.com/",
    product: "Web Analytics",
    name: "Hitsteps",
    location: "Worldwide",
    logo: "hitsteps.png"
  },
  {
    id: 21,
    url: "https://www.pexpeppers.com/",
    product: "Hot Sauce",
    name: "PexPeppers",
    location: "Worldwide",
    logo: "pexpeppers.png"
  },
  {
    id: 22,
    url: "https://wildundfrei-headshop.de",
    product: "Head Shop",
    name: "Wild und Frei - Headshop.de",
    location: "Germany",
    logo: "wildundfrei.png"
  },
  {
    id: 23,
    url: "https://www.sfbmwcoding.com/now-accepting-raiblocks/",
    product: "BMW Coding Options",
    name: "SF BMW Coding",
    location: "USA",
    logo: "sfbmwcoding.png"
  },
  {
    id: 24,
    url: "http://lingualift.com/",
    product: "Language Courses",
    name: "LinguaLift",
    location: "Worldwide",
    logo: "lingualift.png"
  },
  {
    id: 25,
    url: "https://ymir-online.com/",
    product: "Multiplayer Game",
    name: "Ymir",
    location: "Worldwide",
    logo: "ymir.png"
  },
  {
    id: 26,
    url: "http://scottmillsart.com/contact/",
    product: "Art",
    name: "Scott Mills Art",
    location: "Worldwide",
    logo: "scottmills.png"
  },
  {
    id: 27,
    url: "https://shop.xrb.life/",
    product: "Buy from eBay with XRB",
    name: "XRB Life",
    location: "Worldwide",
    logo: "xrblife.png"
  },
  {
    id: 28,
    url: "https://thegrowkit.ca",
    product: "Grow Kit",
    name: "Grow Kit",
    location: "Canada, USA",
    logo: "growkit.png"
  },
  {
    id: 29,
    url: "https://www.donga.fr",
    product: "Construction Materials",
    name: "DONGA",
    location: "France",
    logo: "donga.png"
  },
  {
    id: 31,
    url: "https://www.doppelstore.com.br/",
    product: "Clothing",
    name: "Doppel Store",
    location: "Brazil",
    logo: "doppelstore.png"
  },
  {
    id: 32,
    url: "https://cryptodesigns.io",
    product: "Cryptocurrency Artwork",
    name: "Crypto Designs",
    location: "Worldwide",
    logo: "cryptodesigns.png"
  },
  {
    id: 33,
    url: "https://servebyte.com",
    product: "Web Hosting and Servers",
    name: "Servebyte Ltd",
    location: "Worldwide",
    logo: "servebyte.png"
  },
  {
    id: 34,
    url: "https://creditglory.com",
    product: "Credit Repair",
    name: "Credit Glory",
    location: "USA",
    logo: "creditglory.png"
  },
  {
    id: 35,
    url: "https://naviforcewatch.store/",
    product: "Men's Watches",
    name: "Naviforce Watch Store",
    location: "Worldwide",
    logo: "naviforce.png"
  },
  {
    id: 36,
    url: "https://www.halfmoonmods.com",
    product: "Vape Products",
    name: "Half Moon Mods",
    location: "Worldwide",
    logo: "halfmoonmods.png"
  },
  {
    id: 37,
    url: "http://keeperrl.com",
    product: "PC Game",
    name: "KeeperRL",
    location: "Worldwide",
    logo: "keeperrl.png"
  },
  {
    id: 38,
    url: "https://bitlit.io",
    product: "Marketplace",
    name: "BitLit",
    location: "Worldwide",
    logo: "bitlit.png"
  },
  {
    id: 39,
    url: "https://tonyseliquid.com/",
    product: "E-Liquid",
    name: "Tony's Eliquid Co.",
    location: "USA",
    logo: "tonyseliquid.png"
  },
  {
    id: 40,
    url: "http://www.fermentationculture.eu/",
    product: "Koji Spores",
    name: "Fermentation Culture",
    location: "EU/EEA",
    logo: "fermentationculture.png"
  },
  {
    id: 41,
    url: "https://loveateverysight.com/",
    product: "Personalized Cards",
    name: "LoveAtEverySight",
    location: "USA",
    logo: "loveateverysight.png"
  },
  {
    id: 42,
    url: "https://www.fixtri.com.br/",
    product: "Bicycle Stickers",
    name: "FixTri - Adesivos",
    location: "Brazil",
    logo: "fixtri.png"
  },
  {
    id: 43,
    url: "https://ppcprotect.com/cryptocurrencies/",
    product: "Ad Fraud Detection",
    name: "PPC Protect",
    location: "Worldwide",
    logo: "pppcprotect.png"
  },
  {
    id: 44,
    url: "http://xrbnodes.com/",
    product: "RaiBlocks Node Setup",
    name: "XRB Nodes",
    location: "Worldwide",
    logo: "xrbnodes.png"
  },
  {
    id: 45,
    url: "https://www.dreamlandmagic.com",
    product: "Magic Shop",
    name: "Dreamlandmagic",
    location: "Worldwide",
    logo: "dreamlandmagic.png"
  },
  {
    id: 46,
    url: "http://creativedesignlab.co/kayla/",
    product: "Graphic Designer",
    name: "Kayla Lauren",
    location: "Worldwide",
    logo: "kaylalauren.png"
  },
  {
    id: 47,
    url: "https://thecopperhat.ca/",
    product: "Traditional Shaving and Beard Supplies",
    name: "The Copper Hat",
    location: "Worldwide",
    logo: "thecopperhat.png"
  },
  {
    id: 48,
    url: "https://edgeworthdesigncompany.com/",
    product: "Web Design",
    name: "Edgeworth Design Company",
    location: "Worldwide",
    logo: "edgeworthdesigncompany.png"
  },
  {
    id: 49,
    url: "http://aclcreativestudio.com",
    product: "Film and Book Distribution and Branding",
    name: "ACL Creative Studio",
    location: "Worldwide",
    logo: "aclcreativestudio.png"
  },
  {
    id: 50,
    url: "http://www.doac.us",
    product: "Cryptocurrency Artwork",
    name: "Department of Art-Cryptomancy",
    location: "Worldwide",
    logo: "artcryptomancy.png"
  },
  {
    id: 51,
    url: "http://sekerkatomas.cz/obchod/",
    product: "E-Litterature",
    name: "Sekerka Tomas",
    location: "Czech, English",
    logo: "sekerkatomas.png"
  },
  {
    id: 52,
    url: "https://blockverse.io",
    product: "Marketplace",
    name: "BlockVerse",
    location: "Worldwide",
    logo: "blockverse.png"
  },
  {
    id: 53,
    url: "https://www.snorre-laces.com/",
    product: "Shoelaces",
    name: "Snorre Laces",
    location: "Germany",
    logo: "snorre.png"
  },
  {
    id: 54,
    url: "http://jackstaxback.com",
    product: "Tax Returns",
    name: "JacksTaxBack.com",
    location: "Canada",
    logo: "jackstaxback.png"
  },
  {
    id: 55,
    url: "http://franchise.boutique",
    product: "FDD Documents",
    name: "Franchise Boutique",
    location: "USA",
    logo: "franchiseboutique.png"
  },
  {
    id: 56,
    url: "https://www.domein-direct.com",
    product: "Web Hosting",
    name: "Domein-Direct",
    location: "Worldwide",
    logo: "domeindirect.png"
  },
  {
    id: 57,
    url: "https://timebook.life",
    product: "Fun Planners for a Great Life",
    name: "TimeBook",
    location: "Worldwide",
    logo: "timebook.png"
  },
  {
    id: 58,
    url: "https://cryptoaudio.club/",
    product: "Budget Earphones & Earbuds",
    name: "CryptoAudio Club",
    location: "Worldwide",
    logo: "cryptoaudioclub.png"
  },
  {
    id: 59,
    url: "https://wkend.club",
    product: "Sunglasses",
    name: "WK END eyewear",
    location: "Worldwide",
    logo: "wkend.png"
  },
  {
    id: 60,
    url: "http://www.bitcoinpsychic.com/",
    product: "Psychic Readings",
    name: "Bitcoin Psychic",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 61,
    url: "https://guesswinner.com/",
    product: "Gambling",
    name: "GuessWinner",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 62,
    url: "http://www.pinoygamestore.com",
    product: "Gaming",
    name: "Pinoy Game Store",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 63,
    url: "http://nanomerch.net",
    product: "Nano Merchandise",
    name: "Nano Merch",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 64,
    url: "http://www.brisbanetechrepairs.com",
    product: "Technology Repairs",
    name: "Brisbane Tech Repairs",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 65,
    url: "http://www.keepspaceblack.org",
    product: "Weird Charity",
    name: "The League to Keep Space Black",
    location: "Worldwide",
    logo: "keepspaceblack.png"
  },
  {
    id: 66,
    url: "https://www.leyland.com/",
    product: "Women's Activewear",
    name: "Leyland",
    location: "Worldwide",
    logo: ""
  },
  {
    id: 67,
    url: "https://yonilife.com/shop/",
    product: "Rawtoothbrush",
    name: "Yoni",
    location: "Worldwide",
    logo: ""
  }
];

export default testAPI;
