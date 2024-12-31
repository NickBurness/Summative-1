import dotenv from 'dotenv'

dotenv.config();

export default {
    apiKey: process.env.API_KEY,
    baseUrl: 'https://api.freecurrencyapi.com/v1/', // free currency api base url
    port: process.env.PORT,
    test: process.env.TEST
};