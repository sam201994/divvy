/* modules */
const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
  totalAmount: { type: Number, required: true },
  discription: { type: String, required: true },
  members : { type: Object, required: true },
  division: { type: Array, required: true },
  created_at: Date
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;