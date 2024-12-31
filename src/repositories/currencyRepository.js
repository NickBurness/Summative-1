import Currency from "../models/currency.js";

class CurrencyRepository {
    constructor(apiService) {
        this.apiService = apiService;
        this.currencies = [];
    }

    async initialize() {
        try {
            // Fetch both sets of data in parallel from the currency 
            const [currencyDetails, exchangeRates] = await Promise.all([
                this.apiService.getCurrencyDetails(),
                this.apiService.getExchangeRates()
            ]);

            this.currencies = Object.entries(currencyDetails).map(([code, details]) => {
                return new Currency(
                    code,
                    details.name,
                    exchangeRates[code] || null
                );
            });
        } catch (error) {
            throw new Error(`Repository initialization failed: ${error.message}`);
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