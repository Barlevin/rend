const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
  name:String,
  description:String,
  subCategories:Array,
  createdBy:String,

});

module.exports = mongoose.model('Category',Category)
