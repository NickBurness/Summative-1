// get currency model and useful dictionary from other .js files
import Currency from "../models/currency.js";
import { countryCurrencyMap } from "../utils/countryCurrencyMap.js";

// 
class CurrencyRepository {
    constructor(apiService) {
        this.apiService = apiService;
        this.currencies = [];
        this.exchangeRates = {};
        this.currencyToCountryMap = {};
    }

    // this is a complex function that is responsible for consuming the CurrencyService class to get currency data 
    // for use accross the application. 
    // this function is currently called only once when the program starts running, as to limit the number of API calls and remain within the 
    // usage quota. 
    // the method could be placed on a periodic timer to facilitate real-time exchange rates data.
    async initialise() {
        try {
            // Fetch both sets of data in parallel using methods from currencyService.js
            const [currencyDetails, exchangeRates] = await Promise.all([
                this.apiService.getCurrencyDetails(),
                this.apiService.getExchangeRates()
            ]);

            // Create reverse mapping for country codes
            this.currencyToCountryMap = Object.entries(countryCurrencyMap).reduce((acc, [country, currency]) => {
                acc[currency] = country;
                return acc;
            }, {});

            // Map exchange rates and currency details to populate the currency model
            this.currencies = Object.entries(currencyDetails).map(([code, details]) => {
                // add information to logs for dev purposes
                // console.log('Mapping currency:', code, 'to country code:', this.currencyToCountryMap[code]);
                // yield a new currency object with the necessary data brought in by the custom api service
                return new Currency(
                    code,
                    details.name,
                    exchangeRates[code] || null,
                    this.currencyToCountryMap[code] || null,
                    details.symbol
                );
            });

            // Calculate the currency exchange rates for all currencies
            this.exchangeRates = this.calculateExchangeRates(this.currencies);
            // print results to the console to verify work has taken place
            // console.log(this.currencies);
            // console.log(this.exchangeRates);

        // if any error is encountered, throw a new error with a helpful message 
        } catch (error) {
            throw new Error(`Repository initialisation failed: ${error.message}`);
        }
    }

    // Complex function called once that works out the currency Rates for every avilable currency not just US Dollars
    calculateExchangeRates(currencies) {
        // empty object to store the exchange rates
        const exchangeRates = {};
    
        // Loop through all currencies
        currencies.forEach(currency1 => {
            // empty object stored in the exchangeRates object for current currency loop iteration
            exchangeRates[currency1.code] = {};
    
            // Loop through all other currencies and calculate the current exchange rates
            currencies.forEach(currency2 => {
                // divide the rate of currency2 by currency1
                exchangeRates[currency1.code][currency2.code] = currency2.rate / currency1.rate;
            });
        });
    
        // Return the object containing all calculated exchange rates
        return exchangeRates;
    }

    // returns all available currencies
    findAll() {
        return this.currencies;
    }

    // returns currency based on the currency code passed as a param
    findByCode(code) {
        // match the currency using the code for example USD, GBP
        const currency = this.currencies.find(c => c.code === code);

        // if no currency is found throw an error message
        if (!currency) {
            throw new Error(`Currency with code ${code} not found`);
        }
        return currency;
    }

    // returns currencies by a rate range
    findByRateRange(minRate, maxRate) {
        return this.currencies.filter(
            // conditional operators used to filter currencies by rate
            currency => currency.rate >= minRate && currency.rate <= maxRate
        );
    }

    // returns the total number of currencies
    count() {
        return this.currencies.length;
    }
}

export default CurrencyRepository;