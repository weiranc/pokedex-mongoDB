const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String,
  display: Boolean
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;