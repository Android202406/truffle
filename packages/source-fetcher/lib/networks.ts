import type * as Types from "./types";

export const networkNamesById: { [id: number]: string } = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan",
  11155111: "sepolia",
  10: "optimistic",
  69: "kovan-optimistic",
  420: "goerli-optimistic",
  28528: "goerli-bedrock-optimistic",
  42161: "arbitrum",
  42170: "nova-arbitrum",
  421611: "rinkeby-arbitrum",
  421613: "goerli-arbitrum",
  137: "polygon",
  80001: "mumbai-polygon",
  1101: "zkevm-polygon",
  1442: "testnet-zkevm-polygon",
  100: "gnosis", //formerly known as xdai
  10200: "chiado-gnosis",
  300: "optimism-gnosis", //optimism on gnosis, not vice versa
  99: "core-poa",
  77: "sokol-poa",
  56: "binance",
  97: "testnet-binance",
  5611: "testnet-opbnb-binance",
  56288: "boba-binance",
  9728: "testnet-boba-binance",
  42220: "celo",
  44787: "alfajores-celo",
  62320: "baklava-celo",
  17323: "cannoli-celo", //note: not on chainlist.org
  43114: "avalanche",
  43113: "fuji-avalanche",
  11111: "wagmi-avalanche",
  53935: "dfk-avalanche",
  335: "testnet-dfk-avalance",
  432204: "dexalot-avalanche",
  432201: "testnet-dexalot-avalanche",
  4337: "beam-avalanche",
  13337: "testnet-beam-avalanche",
  2037: "kiwi-avalanche",
  78430: "amplify-avalanche",
  78431: "bulletin-avalanche",
  78432: "conduit-avalanche",
  43288: "boba-avalanche",
  4328: "bobafuji-avalanche",
  40: "telos",
  41: "testnet-telos",
  8: "ubiq",
  311752642: "oneledger",
  4216137055: "frankenstein-oneledger",
  57: "syscoin",
  5700: "tanenbaum-syscoin",
  288: "boba",
  28: "rinkeby-boba",
  2888: "goerli-boba",
  106: "velas",
  82: "meter",
  83: "testnet-meter",
  1313161554: "aurora",
  1313161555: "testnet-aurora",
  250: "fantom",
  4002: "testnet-fantom",
  128: "heco",
  256: "testnet-heco",
  1284: "moonbeam",
  1285: "moonriver",
  1287: "moonbase-alpha",
  1294: "bobabeam",
  1297: "bobabase",
  301: "bobaopera",
  4051: "testnet-bobaopera",
  122: "fuse",
  11297108109: "palm",
  11297108099: "testnet-palm",
  70: "hoo", //not presently supported by any fetcher, but formerly by etherscan
  25: "cronos",
  338: "testnet-cronos", //not presently supported by either fetcher, but formerly by etherscan
  199: "bttc",
  1029: "donau-bttc",
  1024: "clover", //not presently supported by any fetcher, but formerly by etherscan
  44: "crab-darwinia",
  43: "pangolin-darwinia",
  9001: "evmos",
  9000: "testnet-evmos",
  62621: "multivac",
  534: "candle",
  192837465: "gather",
  486217935: "devnet-gather",
  356256156: "testnet-gather",
  246: "energyweb",
  73799: "volta-energyweb",
  71402: "godwoken",
  71401: "testnet-godwoken",
  50: "xinfin", //not presently supported by any fetcher, but...
  51: "apothem-xinfin",
  7700: "canto",
  7701: "testnet-canto",
  592: "astar",
  336: "shiden-astar",
  8217: "cypress-klaytn",
  1001: "baobab-klaytn",
  7000: "zetachain", //not presently supported by any fetcher, but...
  7001: "athens-zetachain",
  42262: "emerald-oasis",
  42261: "testnet-emerald-oasis",
  23294: "sapphire-oasis",
  23295: "testnet-sapphire-oasis",
  14: "flare",
  19: "songbird-flare",
  16: "coston-flare",
  114: "coston2-flare",
  2048: "stratos", //not presently supported by any fetcher, but...
  2047: "testnet-stratos",
  8453: "base",
  84531: "goerli-base",
  641230: "bear",
  888: "wanchain",
  999: "testnet-wanchain",
  7668: "root",
  7672: "porcini-root",
  295: "hedera",
  1149: "symplexia",
  2000: "dogechain",
  568: "testnet-dogechain",
  1339: "elysium",
  167005: "grimsvotn-taiko",
  167006: "eldfell-taiko",
  96: "bitkub",
  25925: "testnet-bitkub",
  7777777: "zora",
  570: "rollux",
  57000: "tanenbaum-rollux",
  6119: "uptn",
  2222: "kava",
  2221: "testnet-kava",
  314: "filecoin",
  314159: "calibration-filecoin",
  32769: "zilliqa",
  33101: "testnet-zilliqa",
  111111: "siberium", //not presently supported by either fetcher, but...
  111000: "testnet-siberium",
  59144: "linea",
  59140: "goerli-linea",
  22776: "map",
  212: "makalu-map",
  2021: "edgeware",
  333000333: "meld",
  222000222: "kanazawa-meld",
  246529: "sigma1-artis",
  30: "rsk",
  6: "kotti-etc",
  2046399126: "europa-skale",
  2009: "cloudwalk",
  2008: "testnet-cloudwalk",
  416: "sx",
  647: "toronto-sx",
  1088: "andromeda-metis",
  599: "goerli-metis",
  5551: "nahmii",
  534352: "scroll", //not presently supported by any fetcher, but...
  534353: "alpha-scroll",
  1000: "gton",
  50021: "testnet-gton",
  //shib does not appear to have a mainnet yet
  719: "testnet-shib", //note: not on chainlist.org,
  787: "acala",
  595: "mandala-acala",
  686: "karura",
  2021: "edgeware",
  2109: "exosama",
  2222: "kava",
  2221: "testnet-kava",
  2569: "techpay",
  //not including techpay testnet as I can't determine its network ID
  10687: "point",
  113: "dehvo"
  //I'm not including crystaleum as it has network ID different from chain ID
  //not including kekchain for the same reason
  //not including ethereum classic mainnet or mordor for same reason
};

export const networksByName: Types.SupportedNetworks = Object.fromEntries(
  Object.entries(networkNamesById).map(
    ([id, name]) => [name, { name, networkId: Number(id), chainId: Number(id) }] //id is a string since it's a key so must use Number()
  )
);
