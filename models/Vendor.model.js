const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vendor = new Schema({
  name:String,
  city:String,
  street:String,
  postalCode:String,
  houseNumber:String,
  contactName:String,
  email:String,
  phoneNumber:String,
  phoneNumberTwo:String,
  description:String,
  logo:String,
  coverImage:String,
  viewsPerMonth:Number,
  itemsCount:Number

});

module.exports = mongoose.model('Vendor',Vendor)
