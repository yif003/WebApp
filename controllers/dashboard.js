const bcrypt = require('bcryptjs');
const root = require('../util/root');
const User = require('../models/user');




exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.sendFile(root+'/views/Logout.html');
  });
};

exports.PostAddItem = (req, res, next) => {
    const email = req.body.email;
    const Hours_worked = req.body.Hours_worked;
    User.findOne({email:email})
        .then(userdoc=>{
            if(userdoc){
                userdoc.status.items.push(Hours_worked);
                return User.save(done);
            }
            else{
                req.flash('err', 'user does not exist');
                return res.redirect('/admin/usermanage');
            }
        })
        .catch(err=>{
            console.log(err);
        });
  };