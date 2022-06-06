const root = require('../util/root');

exports.getDashboard=(req, res, next)=>{
    res.sendFile(root+'/views/Dashboard.html');
}