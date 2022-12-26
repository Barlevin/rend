const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  id:String,
  name:String,
  description:String,
  quantity:Number,
  vendorId:String,
  price:String,
  type:String,
  category:String,
  subCategory:String,
  barcode:String,
  originalPrice:String,
  boxingType:String,
  fabric:String,
  size:String,
  color:String,
  eventType:String,
  image:String,
  length:String,
  designer:String,

});

module.exports = mongoose.model('Product',Product)
