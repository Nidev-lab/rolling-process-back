const router = require('express').Router();
const controller = require('../controllers/processDetail.controller');

const path = '/v1/process-detail';

router
  .get(`${path}/:id`, controller.getProcessDetail)
  .post(`${path}/create`, controller.postProcessDetail)
  .get(`${path}/findAll`, controller.getAllProcessDetail);

module.exports = router;
