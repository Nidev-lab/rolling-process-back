const mongoose = require('mongoose');

const processListSchema = new mongoose.Schema({
  processId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assets: [
    {
      label: {
        type: String,
      },
      href: {
        type: String,
      },
    },
  ],
  area: {
    type: String,
    required: true,
  },
});

const ProcessList = mongoose.model('ProcessList', processListSchema);

module.exports = ProcessList;
