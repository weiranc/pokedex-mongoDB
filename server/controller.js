const mongoose = require('mongoose');
const Pokemon = require('../db/Pokemon.js');

const controller = {
  getAll: function(req, res) {
    Pokemon.find({})
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.error(err);
      })
  },
  getAllByType: function(req, res) {
    Pokemon.find({type: req.params.type})
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.error(err);
      })
  },
  postPokemon: function(req, res) {
    Pokemon.create({name: req.body.name, type: req.body.type, img: req.body.img})
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.error(err);
      })
  },
  updateName: function(req, res) {
    Pokemon.findOneAndUpdate({_id: req.params.id}, {name: req.body.name})
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.error(err);
      })
  },
  deletePokemon: function(req, res) {
    Pokemon.deleteOne({_id: req.params.id})
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.error(err);
      })
  }
};

module.exports = controller;