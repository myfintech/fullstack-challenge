const express = require('express');
const router = express.Router();
const db = require('../../models');
const moment = require('moment');


router.get('/', (req, res, next) => {
  db.cups.findAll()
  .then(cup => {
    res.status(200).json(cup);
  })
  .catch(console.error);
});

router.get('/tenants', (req, res, next) => {
  db.tenant.findAll()
  .then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

router.post('/tenants', (req, res, next) => {
  console.log(req.body);
  db.tenant.create({
    name: req.body.name,
    created_at: moment().format('YYYY-MM-DD HH:mm:ss Z'),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss Z')
  }).then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

router.get('tenants/:id', (req, res, next) => {
  db.tenant.findById(req.params.id).then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

router.put('tenants/:id', (req, res, next) => {
  db.tenant.update({
    name: req.body.name,
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss Z'),
  }, { where: { id: req.params.id }})
  .then (tenant => {
    res.staus(200).json(tenant);
  })
  .catch(console.error);
})

router.delete('tenants/:id', (req, res, next) => {
  db.tenant.destroy({
    where: { id: req.params.id }
  }).then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

module.exports = router;
