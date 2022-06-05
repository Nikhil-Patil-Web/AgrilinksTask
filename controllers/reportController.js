const Report = require('../models/reportModel');
const APIFeatures =require('../apiFeatures');

exports.getAllReports = async (req, res) => {
  try {
    //Execute Query
    const features = new APIFeatures(Report.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const reports= await features.query;

    res.status(200).json({
      status: 'success',
      results: reports.length,
      data: {
        reports,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}

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

exports.getReport = async (req, res) => {
  try {
    const stats = await Report.aggregate([
      {
        $group: {
           _id: {$toUpper: '$cmdtyName'},
           num: {$sum: 1},
           averagePrice: {$avg: { $sum: { $divide: ['price','convFactr']}}},
        },
      },
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        stats,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}