const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('../models');
const PORT = process.env.PORT || 1337;

app.use(bodyParser.json());

app.use('/api', require('./api'));

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
})

module.exports = app;
