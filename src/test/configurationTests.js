import assert from 'assert';
import dotenv from 'dotenv';
import config from '../config/config.js';

describe("Configuration Tests", function () {
  it('Should read from .env file securely', async function () {
    dotenv.config({ path: '.env' });
    assert.equal(config.test, 'This is a value purely for unit tests');
  });

  it('Should read from .env file when environment is not set', async function() {
    process.env.NODE_ENV = undefined;
    dotenv.config({ path: '.env' });
    assert.equal(config.test, 'This is a value purely for unit tests');
  });
});