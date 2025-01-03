import Currency from "../models/currency.js";
import { countryCurrencyMap } from "../utils/countryCurrencyMap.js";

class CurrencyRepository {
    constructor(apiService) {
        this.apiService = apiService;
        this.currencies = [];
        this.exchangeRates = {};
        this.currencyToCountryMap = {};
    }

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

            // Map exchange rates and currency details to populate currency.js model
            this.currencies = Object.entries(currencyDetails).map(([code, details]) => {
                console.log('Mapping currency:', code, 'to country code:', this.currencyToCountryMap[code]);
                return new Currency(
                    code,
                    details.name,
                    exchangeRates[code] || null,
                    this.currencyToCountryMap[code] || null,
                    details.symbol
                );
            });

            // Calculate exchange rates between all currencies
            this.exchangeRates = this.calculateExchangeRates(this.currencies);
            console.log(this.currencies);
            console.log(this.exchangeRates);

        } catch (error) {
            throw new Error(`Repository initialisation failed: ${error.message}`);
        }
    }

    calculateExchangeRates(currencies) {
        // empty object to store the exchange rates
        const exchangeRates = {};
    
        // Loop through each currency
        currencies.forEach(currency1 => {
            // empty object for the current currency in the exchangeRates object
            exchangeRates[currency1.code] = {};
    
            // Loop through each currency again to calculate the exchange rate
            currencies.forEach(currency2 => {
                // Calculate the exchange rates
                // divide the rate of currency2 by currency1
                exchangeRates[currency1.code][currency2.code] = currency2.rate / currency1.rate;
            });
        });
    
        // Return the complete exchangeRates object containing all calculated exchange rates
        return exchangeRates;
    }

    // returns all currencies
    findAll() {
        return this.currencies;
    }

    // returns currency based on the currency code passed as a param
    findByCode(code) {
        // match the currency using the code for example USD, GBP
        const currency = this.currencies.find(c => c.code === code);
        if (!currency) {
            throw new Error(`Currency with code ${code} not found`);
        }
        return currency;
    }

    // returns currencies by a rate range
    findByRateRange(minRate, maxRate) {
        return this.currencies.filter(
            currency => currency.rate >= minRate && currency.rate <= maxRate
        );
    }

    // returns the total number of currencies
    count() {
        return this.currencies.length;
    }
}

export default CurrencyRepository;