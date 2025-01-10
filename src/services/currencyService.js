// get secrets from config
import config from '../config/config.js';

// Service class to support the CurrencyRepostiory class
class CurrencyService {
    constructor() {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl;
    }

    // this method attempts to call the 3rd party api and return general information on all of the available currencies such as the code, symbol, name etc.
    async getCurrencyDetails() {
        // construct a call to the FreeCurrencyapi API
        const response = await fetch(
            // target endpoint to the 3rd party api complete with api key gathered from config file
            `${this.baseUrl}/currencies?apikey=${this.apiKey}&currencies=`
        );

        // if an error is encountered, throw the error with a detail of the response
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return (await response.json()).data;
    }

    // this method attempts to call the 3rd party api and return the latest exchange rates based on $1 US Dollar
    async getExchangeRates() {
        // construct call to the FreeCurrencyapi API and get a list of rates on available currencies based on $1 US Dollar
        const response = await fetch(
            // target endpoint to the 3rd party api complete with api key gathered from config file
            `${this.baseUrl}/latest?apikey=${this.apiKey}&currencies=`
        );

        // if an error is encountered, throw the error with a detail of the response
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return (await response.json()).data;
    }
}

// makes this javascript class importable to other .js files
export default CurrencyService