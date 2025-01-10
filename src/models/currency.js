// Class to encapsulate all of the neccessary properties the application needs in relation to Currencies
class Currency {
    constructor(code, name, rate, countryCode, symbol) {
        this.code = code; // currency code (EUR, USD, GBP, etc..)
        this.name = name; // currency name (Euro, US Dollar, British Pound, etc...)
        this.rate = rate; // The exchange rate for the country based on USD
        this.countryCode = countryCode; // 2 digit identifier which maps currencies to countries/regions (eu, us, gb, etc...)
        this.symbol = symbol // currency symbol (€, $, £)
    }
}

// make the Currency class available to other javascript files when imported
export default Currency;