'use strict';
module.exports = (sequelize, DataTypes) => {
  var tenant = sequelize.define('tenant', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING(256),
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tenant;
};
