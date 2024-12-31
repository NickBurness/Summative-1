// get secrets from config
import config from '../config/config.js';

class CurrencyService {
    constructor() {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl;
    }


    // this method attempts to call the 3rd party api and returns a json response 
    // with general information on all of the available currencies such as the code, symbol, name etc.
    async getCurrencyDetails() {
        // construct call to the freecurrencyapi and a get a lit of all of the available currencies and their metadata
        const response = await fetch(
            `${this.baseUrl}/currencies?apikey=${this.apiKey}&currencies=`
        );

        // if an error is encountered, throw the error with a detail of the response
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return (await response.json()).data;
    }

    // this method attempts to call the 3rd party api and returns a json response
    // with the latest exchange rates available for all available currencies
    async getExchangeRates() {
        // construct call to the freecurrencyapi and get a list of all of the latest exchange rates
        const response = await fetch(
            `${this.baseUrl}/latest?apikey=${this.apiKey}&currencies=`
        );

        // if an error is encountered, throw the error with a detail of the response
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        return (await response.json()).data;
    }
}

export default CurrencyService