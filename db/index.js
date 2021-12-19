const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/pokemon';

const db = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = db;