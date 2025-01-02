import Currency from "../models/currency.js";

const countryCurrencyMap = {
    eu: "EUR",
    us: "USD",
    jp: "JPY",
    bg: "BGN",
    cz: "CZK",
    dk: "DKK",
    gb: "GBP",
    hu: "HUF",
    pl: "PLN",
    ro: "RON",
    se: "SEK",
    ch: "CHF",
    is: "ISK",
    no: "NOK",
    hr: "HRK",
    ru: "RUB",
    tr: "TRY",
    au: "AUD",
    br: "BRL",
    ca: "CAD",
    cn: "CNY",
    hk: "HKD",
    id: "IDR",
    il: "ILS",
    in: "INR",
    kr: "KRW",
    mx: "MXN",
    my: "MYR",
    nz: "NZD",
    ph: "PHP",
    sg: "SGD",
    th: "THB",
    za: "ZAR",
};

class CurrencyRepository {
    constructor(apiService) {
        this.apiService = apiService;
        this.currencies = [];
    }

    async initialise() {
        try {
            // Fetch both sets of data in parallel using methods from currencyService.js
            const [currencyDetails, exchangeRates] = await Promise.all([
                this.apiService.getCurrencyDetails(),
                this.apiService.getExchangeRates()
            ]);

            // Create reverse mapping for country codes
            const currencyToCountryMap = Object.entries(countryCurrencyMap).reduce((acc, [country, currency]) => {
                acc[currency] = country;
                return acc;
            }, {});

            // Map exchange rates and currency details to populate currency.js model
            this.currencies = Object.entries(currencyDetails).map(([code, details]) => {
                console.log('Mapping currency:', code, 'to country code:', currencyToCountryMap[code]);
                return new Currency(
                    code,
                    details.name,
                    exchangeRates[code] || null,
                    currencyToCountryMap[code] || null,
                    details.symbol
                );
            });
            console.log(this.currencies)

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