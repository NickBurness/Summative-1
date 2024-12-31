import Currency from "../models/currency.js";

class CurrencyRepository {
    constructor(apiService) {
        this.apiService = apiService;
        this.currencies = [];
    }

    async initialize() {
        try {
            // Fetch both sets of data in parallel using methods from currencyService.js
            const [currencyDetails, exchangeRates] = await Promise.all([
                this.apiService.getCurrencyDetails(),
                this.apiService.getExchangeRates()
            ]);

            // map exchange rates and currency detail to populate currency.js model
            this.currencies = Object.entries(currencyDetails).map(([code, details]) => {
                return new Currency(
                    code,
                    details.name,
                    exchangeRates[code] || null
                );
            });
        
        // if any errors are encountered in the process, throw error and detail of the error
        } catch (error) {
            throw new Error(`Repository initialisation failed: ${error.message}`);
        }
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