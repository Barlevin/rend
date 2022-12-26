const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  userName: String,
  password:String,
  email:String,
  shopLists:Array,

});

module.exports = mongoose.model('User',User)
