const express = require('express');
const root = require('../util/root');
const main = express.Router();
const LoginController = require('../Scripts/LoginController')


main.get('/', LoginController.GETLogin);

main.post('/', LoginController.POSTLogin);

module.exports = main;