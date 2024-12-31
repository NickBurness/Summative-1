import { expect } from 'chai'
import sinon from 'sinon' 

// system under test
import CurrencyRepository from '../repositories/currencyRepository.js';

describe('CurrencyRepository.js', () => {
    let repository;
    let apiService;

    beforeEach(() => {
        apiService = {
            getCurrencyDetails: sinon.stub(),
            getExchangeRates: sinon.stub()
        };
        repository = new CurrencyRepository(apiService);
    });

    it('should initialise with currency data', async () => {
        apiService.getCurrencyDetails.resolves({
            USD: { name: 'US Dollar' },
            EUR: { name: 'Euro' }
        });
        apiService.getExchangeRates.resolves({
            USD: 1.0,
            EUR: 0.85
        });

        await repository.initialize();

        expect(repository.count()).to.equal(2);
        expect(repository.findByCode('USD')).to.deep.include({
            code: 'USD',
            name: 'US Dollar',
            rate: 1.0
        });
    });

    it('should throw error when currency not found', () => {
        expect(() => repository.findByCode('INVALID'))
            .to.throw('Currency with code INVALID not found');
    });

    it('should find currencies within rate range', async () => {
        apiService.getCurrencyDetails.resolves({
            USD: { name: 'US Dollar' },
            EUR: { name: 'Euro' },
            GBP: { name: 'British Pound' }
        });
        apiService.getExchangeRates.resolves({
            USD: 1.0,
            EUR: 0.85,
            GBP: 0.73
        });

        await repository.initialize();
        const result = repository.findByRateRange(0.8, 0.9);
        
        expect(result).to.have.lengthOf(1);
        expect(result[0].code).to.equal('EUR');
    });
});