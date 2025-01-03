// dependency that allows secrets files to be created easily in node projects
import dotenv from 'dotenv'

// initialise dotenv with the values stored in .env file
dotenv.config();

// makes the following data importable when config.js is imported into another javascript file
export default {
    apiKey: process.env.API_KEY,
    baseUrl: 'https://api.freecurrencyapi.com/v1/', // free currency api base url
    port: process.env.PORT,
    test: process.env.TEST
};