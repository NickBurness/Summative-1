require('dotenv').config();

module.exports = {
    apiKey: process.env.API_KEY,
    baseUrl: 'replace with url for the desired 3rd party api',
    port: process.env.PORT,
    test: process.env.TEST
};