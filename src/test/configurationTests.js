import assert from 'assert'
import dotenv from 'dotenv'
import config from '../config/config.js'

// Load environment variables before running tests
before(() => {
  dotenv.config(); // Ensure dotenv loads the .env file
});

describe("Configuration Tests", function () {
  it('Should read from .env file securely', function () {
    assert.equal(config.test, 'This is a value purely for unit tests')
  })
});
