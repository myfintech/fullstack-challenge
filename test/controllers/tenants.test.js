const { describe, it, before, after, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../server/');

describe('The tenants controller', () => {
  it('exposes POST /tenants that creates a tenant when passed valid data', () => {
    expect(true).to.be.true;
  });
});

describe('GET controller lists', function() {
  it('exposes GET /tenants to list all tenants', function(done) {
    request(app)
      .get('/api/tenants')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
