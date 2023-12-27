const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  rol: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    maxlength: 80,
  },
  createAdd: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('users', userSchema);
