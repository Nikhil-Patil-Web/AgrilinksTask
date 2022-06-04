const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: [true, 'A report needs to have a user'],
    unique: false,
    trim: true,
  },

  marketId: {
    type: String,
    required: [true, 'A report needs to have a market'],
  },

  marketName: {
    type: String,
    required: [true, 'A market needs to have a name'],
  },

  cmdtyId: {
    type: String,
    required: [true, 'A commodity must have a id'],
  },
  
  marketType: {
    type: String,
    default: "Mandi",
    required: [true, 'A market needs to have a type associated with it'],
  },

  cmdtyName: {
    type: String,
    required: [true, 'A commodity needs to have a name'],
 },

  priceUnit: {
    type: String,
    default: "Kg",
    required: [true, 'A report needs to have the pricing Unit'],
  },
  
  convFctr: {
    type: Number,
    required: [true, 'A conversion factor is required'],
  }, 

  price: {
    type: Number,
    required: [true, 'An item needs to have a price'],
  },
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
