const express = require('express')
const router = express.Router()
const jokesController = require('../controller/controller')

// General Jokes Routes
router.get('/jokes', jokesController.generalJokes);

module.exports = router;