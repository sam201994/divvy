const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  name: { type: String, required: true },
  password: { type: String, required: true },
  created_at: Date
});

const User = mongoose.model('User', userSchema);

User.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.validatePW = (enteredPW, storedPW) => {
  return bcrypt.compareSync(enteredPW, storedPW);
};

module.exports = User;