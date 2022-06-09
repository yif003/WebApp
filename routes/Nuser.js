const express = require('express');
const root = require('../util/root');
const dashboardController = require('../controllers/dashboard');
const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();


router.get('/Nuser/detailedreport', (req, res, next)=>{
    res.render('metricname');
})

router.get('/Nuser',(req, res, next)=>{
    res.render('dashboard_Normal');
});


module.exports = router;