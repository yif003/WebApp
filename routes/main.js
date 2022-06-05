const express = require('express');
const root = require('../util/root');
const main = express.Router();


main.get('/', (req, res, next)=>{
    res.sendFile(root+'/views/shop.html');
})

module.exports = main;