const express = require('express');
const root = require('../util/root');
const dashboardController = require('../controllers/dashboard');
const authController = require('../controllers/auth');

const router = express.Router();


router.get('/admin/usermanage', (req, res, next)=>{
    res.sendFile(root+'/views/user.html');
})

router.post('/admin/usermanage', dashboardController.PostAddItem);

router.get('/admin', (req, res, next)=>{
    res.sendFile(root+'/views/dashboard_admin.html');
})


module.exports = router;