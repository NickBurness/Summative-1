import dotenv from 'dotenv'

let environmentFile;

console.log(`Current NODE_ENV: ${process.env.NODE_ENV}`)

// determine which environment config file to load
switch(process.env.NODE_ENV) {
    case 'development':
        environmentFile = '.env.development'
        break
    case 'test':
        environmentFile = '.env.test'
        break
    case 'production':
        environmentFile = '.env.production'
        break
    // if NODE_ENV is undefined, indicating local development use the basic .env files
    default:
        environmentFile = '.env'
        break
}

// load the selected .env file
dotenv.config({path: environmentFile});
console.log(`Loaded environment variables from: ${environmentFile}`)

export default {
    apiKey: process.env.API_KEY,
    baseUrl: 'https://api.freecurrencyapi.com/v1/', // free currency api base url
    port: process.env.PORT,
    test: process.env.TEST
};