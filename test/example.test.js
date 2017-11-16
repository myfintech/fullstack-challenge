const { describe, it, before, after, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');

describe('The test system', () => {
  it('should run a test', () => {
    expect(true).to.be.true;
  });
});
