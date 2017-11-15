'use strict';
module.exports = (sequelize, DataTypes) => {
  var knives = sequelize.define('knives', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    sharp: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return knives;
};