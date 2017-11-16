const express = require('express');
const router = express.Router();
const db = require('../../models');
const moment = require('moment');
const Promise = require('bluebird');

//returns all tenants?
router.get('/tenants', (req, res, next) => {
  db.tenant.findAll()
  .then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

//add new tenant
router.post('/tenants', (req, res, next) => {
  Promise.coroutine(function* () {
    const tenant = yield db.tenant.create(req.body);
    res.status(200).json(tenant);
  })()
  .catch(next);
});

//get specific tenant by id
router.get('tenants/:id', (req, res, next) => {
  db.tenant.findById(req.params.id).then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

//update tenant name and timestamp
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

//remove a tenant from db
router.delete('tenants/:id', (req, res, next) => {
  db.tenant.destroy({
    where: { id: req.params.id }
  }).then(tenant => {
    res.status(200).json(tenant);
  })
  .catch(console.error);
})

module.exports = router;
