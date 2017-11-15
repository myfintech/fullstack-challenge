const express = require('express');
const router = express.Router();
const db = require('../../models');


router.get('/', (req, res, next) => {
  db.cups.findAll()
  .then(cup => {
    res.status(200).json(cup);
  })
  .catch(console.error);
});

module.exports = router;
