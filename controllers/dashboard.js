const bcrypt = require('bcryptjs');
const root = require('../util/root');
const User = require('../models/user');


exports.getusermanage = (req, res, next)=>{
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('user', {
        errorMessage: message
    });
}



exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.sendFile(root+'/views/Logout.html');
  });
};

exports.PostAddItem = (req, res, next) => {
    const email = req.body.email;
    const Hours_worked = Array.from(req.body.Hours_worked.split(','));
    User.findOne({email:email})
        .then(userdoc=>{
            if(userdoc){
                for(let i =0; i<Hours_worked.length; i++){
                    userdoc.HoursWorked.push(Hours_worked[i]);
                }
                userdoc.save();
                return res.redirect('/admin/usermanage');
            }
            else{
                return res.redirect('/admin/usermanage');
            }
        })
        .catch(err=>{
            console.log(err);
        });
};

exports.postAddUser = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const sex = req.body.sex;
    User.findOne({ email: email })
      .then(userDoc => {
        if (userDoc) {
          req.flash('error', 'E-Mail exists already, please pick a different one.');
          return res.redirect('/admin/usermanage');
        }
        return bcrypt
          .hash(password, 12)
          .then(hashedPassword => {
            const user = new User({
              email: email,
              password: password,
              admin: false,
              sex: sex,
              HoursWorked: []
            });
            return user.save();
          })
          .then(result => {
            res.redirect('/admin/usermanage');
          });
      })
      .catch(err => {
        console.log(err);
      });
};
exports.clearUserStatus = (req, res, next)=>{
    const email = req.body.email;
    User.findOne({email:email})
        .then(userdoc =>{
            if(userdoc){
                userdoc.clearstatus();
                return res.redirect('/admin/usermanage');
            }
            else{
                return res.redirect('/admin/usermanage');
            }
        })
        .catch(err=>{
            console.log(err);
            return res.redirect('/admin/usermanage');
        })
}

exports.deleteUser = (req, res, next)=>{
    const email = req.body.email;
    User.findOneAndDelete({email:email, admin:false}, function(err, doc){
        if(err){
            return res.redirect('/admin/usermanage');
        }
        else{
            return res.redirect('/admin/usermanage');
        }
    })
}

exports.updateUser = (req, res, next)=>{
    const id = req.body.IDnum;
    const email = req.body.email;
    const password = req.body.password;
    const sex = req.body.sex;
    const Hours_worked = Array.from(req.body.Hours_worked.split(','));

    User.findById(id)
        .then(userdoc=>{
            if(email){
                userdoc.email = email;
            }
            if(password){
                userdoc.password = password;
            }
            if(sex){
                userdoc.sex = sex;
            }
            if(Hours_worked){
                for(let i =0; i<Hours_worked.length; i++){
                    userdoc.HoursWorked.push(Hours_worked[i]);
                }
            }
            return userdoc.save();
        })
        .then(result=>{
            res.redirect('/admin/usermanage');
        })
        .catch(err=>{
            console.log(err);
            res.redirect('/admin/usermanage');
        })
}

exports.getDashboard = (req, res, next)=>{
    res.render('dashboard_admin');
}