const express = require('express');

const router = express.Router();

const reportController = require('../controllers/reportController');

router
  .route('/')
  .post(reportController.createReport)
  .get(reportController.getAllReports);

router
  .route('/:cmdtyName')
  .get(reportController.getReport);


module.exports = router;
