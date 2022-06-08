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
    type: String,
  },
  status: {
    items: [
      {
        Hours_worked:{
          type: Number,
          min:0,
          max: 24,
          required: true
        }
      }
    ]
  }
});

userSchema.methods.addTostatus = function(item) {
  const itemInfoIndex = this.status.items.findIndex(cp => {
    return cp.infoId.toString() === item._id.toString();
  });
  let newQuantity = 1;
  const updatedstatusItems = [...this.status.items];

  if (itemInfoIndex >= 0) {
    newQuantity = this.status.items[itemInfoIndex].quantity + 1;
    updatedstatusItems[itemInfoIndex].quantity = newQuantity;
  } else {
    updatedstatusItems.push({
      infoId: item._id,
      quantity: newQuantity
    });
  }
  const updatedstatus = {
    items: updatedstatusItems
  };
  this.status = updatedstatus;
  return this.save();
};

userSchema.methods.removeFromstatus = function(infoId) {
  const updatedstatusItems = this.status.items.filter(item => {
    return item.infoId.toString() !== infoId.toString();
  });
  this.status.items = updatedstatusItems;
  return this.save();
};

userSchema.methods.clearstatus = function() {
  this.status = { items: [] };
  return this.save();
};






module.exports = mongoose.model('User', userSchema);