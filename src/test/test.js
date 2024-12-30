var assert = require('assert');
const config = require('../config/config');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe("Configuration Tests", function () {
    it('Should read from .env file securely', function () {
      message = config.test
      assert.equal(message, 'This is a value purely for unit tests')
    })
  })
});
