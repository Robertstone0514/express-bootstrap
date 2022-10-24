const express = require('express')
const router = express.Router()
const jokesController = require('../controller/controller')

// Random Jokes Routes
router.get('/jokes', jokesController.randomJokes);

module.exports = router;