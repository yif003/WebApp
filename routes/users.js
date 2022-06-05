const express = require('express');
const root = require('../util/root');
const users = express.Router();


users.get('/users', (req, res, next)=>{
    res.sendFile(root+'/views/add-product.html');
})

module.exports = users;