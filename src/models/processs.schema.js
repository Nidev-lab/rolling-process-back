const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['title', 'subtitle'],
  },
  value: {
    type: String,
    required: true,
  },
});

const processDetailSchema = new mongoose.Schema({
  processId: {
    type: String,
    required: true,
    unique: true,
  },
  details: [detailSchema],
});

module.exports = mongoose.model('processDetail', processDetailSchema);
