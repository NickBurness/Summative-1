import { expect } from 'chai'

// system under test
import Currency from '../models/currency.js';

describe('Currency.js', () => {
    it('should create a currency with correct properties', () => {
        const currency = new Currency('USD', 'US Dollar', 1.0);
        expect(currency.code).to.equal('USD');
        expect(currency.name).to.equal('US Dollar');
        expect(currency.rate).to.equal(1.0);
    });
});