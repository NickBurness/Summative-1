import { expect } from 'chai'
import sinon from 'sinon' 

// system under test
import CurrencyService from '../services/currencyService.js';

describe('CurrencyService.js', () => {
    let service;
    let stub;

    beforeEach(() => {
        // Reset the stub before each test
        global.fetch = stub = sinon.stub();
        service = new CurrencyService();
    });

    afterEach(() => {
        // Restore the stub after each test
        sinon.restore();
    })

    it('should fetch currency details successfully', async () => {
        const mockResponse = {
            data: {
                USD: { name: 'US Dollar' },
                EUR: { name: 'Euro' }
            }
        };

        stub.resolves({
            ok: true,
            json: async () => mockResponse
        });

        const result = await service.getCurrencyDetails();
        expect(result).to.deep.equal(mockResponse.data);
    });

    it('should fetch exchange rates successfully', async () => {
        const mockResponse = {
            data: {
                USD: 1.0,
                EUR: 0.85
            }
        };

        stub.resolves({
            ok: true,
            json: async () => mockResponse
        });

        const result = await service.getExchangeRates();
        expect(result).to.deep.equal(mockResponse.data);
    });

    it('should throw an error when API call fails', async () => {
        stub.resolves({
            ok: false,
            status: 401
        });

        try {
            await service.getCurrencyDetails();
            expect.fail('Should have thrown an error');
        } catch (error) {
            expect(error.message).to.include('API error');
        }
    });
});