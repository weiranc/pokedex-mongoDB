const router = require('express').Router();
const controller = require('./controller.js');

router.route('/pokemon')
  .get(controller.getAll)
  .post(controller.postPokemon)

router.route('/pokemon/:type')
  .get(controller.getAllByType)

router.route('/pokemon/:id')
  .put(controller.updateName)
  .delete(controller.deletePokemon)

module.exports = router;