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

        await repository.initialise();

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
        // mock test data
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

        // initialise repo
        await repository.initialise();
        // get currencies within a rate range
        const result = repository.findByRateRange(0.8, 0.9);
        
        // perform assertions
        expect(result).to.have.lengthOf(1);
        expect(result[0].code).to.equal('EUR');
    });


    
    it('should have correct conversion rates for USD, EUR and GDP', async () => {
    // mock all test data, so that when the repo initialises it is populated with data in exchangeRates property
    apiService.getCurrencyDetails.resolves({
        USD: { name: 'US Dollar' },
        EUR: { name: 'Euro'},
        GBP: { name: 'British Pound'}
    });

    apiService.getExchangeRates.resolves({
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.73
    });

    // intialise repo
    await repository.initialise();

    // gather result to perform assertions
    var result = repository.exchangeRates;
        
    // verify that the rates have been calculated correctly - following the same algorithm used by ConvertCurrency.js
    expect(result.USD).to.deep.equal({ USD: 1, EUR: 0.85, GBP: 0.73 });
    expect(result.EUR).to.deep.equal({ USD: 1.1764705882352942, EUR: 1, GBP: 0.8588235294117647 });
    expect(result.GBP).to.deep.equal({ USD: 1.36986301369863, EUR: 1.1643835616438356, GBP: 1 });
    });
});