const Report = require('../models/reportModel');

exports.createReport = async (req, res) => {
    try {
      const newReport = await Report.create(req.body);
  
      res.status(201).json({
        status: 'success',
        reportDetails: {
          tour: newReport,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };