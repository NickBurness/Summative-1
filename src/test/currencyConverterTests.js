import { expect} from 'chai'
import { convertCurrency } from '../public/js/currencyConverter.js';

describe('currencyConverter.js', () => {
    it('Should convert between USD and EUR', () => {
        const amount = 100;
        const fromRate = 1; // USD
        const toRate = 0.85; // EUR
        const result = convertCurrency(amount, fromRate, toRate);
        expect(result).equal(85);
    });

    it('Should convert between EUR and USD', () => {
        const amount = 100;
        const fromRate = 0.85; // EUR
        const toRate = 1; // USD
        const result = convertCurrency(amount, fromRate, toRate);
        expect(result).to.be.closeTo(117.65, 0.01);
    });

    it('Should convert between GBP and JPY', () => {
        const amount = 100;
        const fromRate = 0.75; // GBP
        const toRate = 110; // JPY
        const result = convertCurrency(amount, fromRate, toRate);
        expect(result).to.be.closeTo(14666.67, 0.01);
    });
})
