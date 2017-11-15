'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];
const _         = require('lodash');
const db        = {};
const listOfAllFileNamesInThisFolder = fs.readdirSync(__dirname);
let sequelize;

// connect to the database either through a process environemnt variable or through the values in the config
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// get a list of all the files that export models
const listOfModelFiles = _.filter(listOfAllFileNamesInThisFolder, (fileName) => {
  return (fileName.indexOf('.') !== 0) && (fileName !== basename) && (fileName.slice(-3) === '.js')
});

// add all the models to the db folder
_.each(listOfModelFiles, (fileName) => {
  const model = sequelize['import'](path.join(__dirname, fileName));
  db[model.name] = model;
});

// associate models with each other
_.each( _.keys(db), (modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
