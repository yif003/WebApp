const mongoose = require('mongoose');

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
  status: {
    items: [
      {
        infoId: {
          type: Schema.Types.ObjectId,
          ref: 'info',
          required: true
        },
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

userSchema.methods.addTostatus = function(status) {
  const statusInfoIndex = this.status.items.findIndex(cp => {
    return cp.infoId.toString() === status._id.toString();
  });
  let newQuantity = 1;
  const updatedstatusItems = [...this.status.items];

  if (statusInfoIndex >= 0) {
    newQuantity = this.status.items[statusInfoIndex].quantity + 1;
    updatedstatusItems[statusInfoIndex].quantity = newQuantity;
  } else {
    updatedstatusItems.push({
      infoId: status._id,
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