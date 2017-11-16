'use strict';

const uuid4 = require('uuid/v4');
const moment = require('moment');
const _ = require('lodash');
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('tenants', fakeDataArray, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

const generateFakeData = () => {
  const fakeCompanyName = faker.company.companyName();
  return {
    id: uuid4(),
    name: fakeCompanyName,
    created_at: moment().toISOString(),
    updated_at: moment().toISOString()
  };

};

const fakeDataArray = _.times(500, generateFakeData);
