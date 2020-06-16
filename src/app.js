const express = require('express');
const { mainController } = require('./controller');

const app = express();

app.get('/', mainController);

module.exports = app;
