'use strict';
module.exports = (sequelize, DataTypes) => {
  var cups = sequelize.define('cups', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cups;
};