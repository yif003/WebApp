const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin:{
    type: Boolean,
    required:true
  },
  sex:{
    type: String
  },
  HoursWorked: [
    Number
  ]
});



userSchema.methods.clearstatus = function() {
  this.HoursWorked = [];
  return this.save();
};






module.exports = mongoose.model('User', userSchema);