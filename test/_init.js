// Handle uncaught exceptions by killing tests
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error(err.stack);
  console.error(err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.error(err.stack);
  console.error(err);
  process.exit(1);
});

const db = require('../models/');

// Prepare / Unprepare
const prepare = require('mocha-prepare');

prepare((done) => {
  console.log('Cleaning the test database...');
  db.sequelize.sync({ force: true })
  .then((thing) => {
    console.log('Test database now clean...');
    done();
  })
  .catch((err) => {
    console.log('Test database now clean...', err);
    done()
    process.exit(1);
  })
});
