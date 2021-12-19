const Pokemon = require('./Pokemon.js');
const mongoose = require('mongoose');
const pokemonData = require('../pokemon.json');

const save = () => {
  Pokemon.insertMany(pokemonData)
    .then(docs => {
      console.log('Data inserted!');
      // mongoose.connection.close();
    })
    .catch(err => {
      console.error(err);
    })
}

save();