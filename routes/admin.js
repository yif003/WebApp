const express = require('express');
const root = require('../util/root');
const dashboardController = require('../controllers/dashboard');
const authController = require('../controllers/auth');

const router = express.Router();


router.get('/admin/usermanage', dashboardController.getusermanage);

router.post('/admin/updateuser', dashboardController.updateUser);
router.post('/admin/deleteuser', dashboardController.deleteUser);
router.post('/admin/clearstatus', dashboardController.clearUserStatus);
router.post('/admin/addingHours', dashboardController.PostAddItem);
router.post('/admin/adduser', dashboardController.postAddUser);

router.get('/admin/detailedreport', (req, res, next)=>{
    res.render('metricname');
})

router.get('/admin', dashboardController.getDashboard);


module.exports = router;