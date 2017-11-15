'use strict';

const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cups', [{
        name: 'Solo',
        color: 'red',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cups', null, {});
  }
};
