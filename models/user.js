const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const userSchema = new mongooseSchema({
  name: String,
  email: String,
  address: String,
  contact: String,
  profile_img: String
});

module.exports = mongoose.model('User',userSchema);
