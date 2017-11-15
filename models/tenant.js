'use strict';
module.exports = (sequelize, DataTypes) => {
  var tenant = sequelize.define('tenant', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(256)
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    }
  }, {
    timestamps: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tenant;
};
