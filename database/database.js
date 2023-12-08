const mongoose = require('mongoose');

const mongoDBUri = 'mongodb+srv://nico1994:nico1994@rolling-process.omcslxh.mongodb.net/';

mongoose.connect(mongoDBUri)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error MongoDB:', err));

module.exports = mongoose;
