const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME, 
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    CONVERSATION_URL: process.env.CONVERSATION_URL,
    DB_PREFIX: process.env.DB_PREFIX,
    SECRET_KEY: process.env.SECRET_KEY,
    RPC_URL: process.env.RPC_URL,
    MAIL_TYPE: process.env.MAIL_TYPE,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_SECURE: process.env.MAIL_SECURE,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    SITE_NAME: process.env.SITE_NAME,
    SITE_LINK: process.env.SITE_LINK, 
    OWNER_KEY: process.env.OWNER_KEY,
    SITE_EMAIL: process.env.SITE_EMAIL  
}