const root = require('../util/root');
const Useraccount = require('../model/Usersaccount');

exports.POSTLogin = (req, res, next)=>{
    res.redirect('/Dashboard');
}

exports.GETLogin = (req, res, next)=>{
    res.sendFile(root+'/views/Login.html');
}