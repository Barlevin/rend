var express = require('express');
var router = express.Router();

const UserModel = require('../models/Users.model');
const VendorModel = require('../models/Vendor.model');
const CategoryModel = require('../models/Category.model');
const ProductModel = require('../models/Product.model');


router.post('/getStatistics', async (req, res) => {

  try {

    let allProducts = await ProductModel.find({});
    let vendors = await VendorModel.find({});

    res.json({
      statusCode:'0',
      statusDesc:'Success',
      data:{vendors:vendors.length,products:allProducts.length}
    })

  } catch (error) {

  }


})

router.post('/addNewProduct', async (req, res) => {

  let product = req.body;

  try {

    let result = await new ProductModel(product).save();

    if (!result._id) throw new Error('failed')

    res.json({
      statusDesc: 'Success',
      statusCode: '0'
    })

  } catch (error) {

    console.log(error.message)
    res.json({
      statusDesc: 'Failed',
      statusCode: '1'
    })

  }


})
router.post('/addNewVendor', async (req, res) => {

  let vendor = req.body;

  try {

    let result = await new VendorModel(vendor).save();

    if (!result.id) throw new Error('failed')

    res.json({
      statusDesc: 'Success',
      statusCode: '0'
    })

  } catch (error) {

    res.json({
      statusDesc: 'Failed',
      statusCode: '1'
    })

  }


})

router.post('/addNewCategory', async (req, res) => {

  let category = req.body;

  try {

    let result = await new CategoryModel(category).save();

    if (!result.id) throw new Error('failed')

    res.
    json({
      statusDesc: 'Success',
      statusCode: '0'
    })

  } catch (error) {

    res.json({
      statusDesc: 'Failed',
      statusCode: '1'
    })

  }


})
router.post('/addNewSubCategory', async (req, res) => {

  let subCategory = req.body;
  const categoryId = subCategory.categoryId

  try {

    let result = await CategoryModel.findOne({ _id: categoryId })

    if (!result.id) throw new Error('failed')
    delete subCategory.categoryId
    result.subCategories.push(subCategory)

    await CategoryModel.findOneAndUpdate({ _id: categoryId }, { $set: result }, { new: true });

    res.json({
      statusDesc: 'Success',
      statusCode: '0'
    })

  } catch (error) {

    res.json({
      statusDesc: 'Failed',
      statusCode: '1'
    })

  }


})

router.post('/getAllProducts', async (req, res) => {

  try {

    let result = await ProductModel.find({});

    if (!result.length > 0) throw new Error('Failed')

    res.json({
      statusCode: '0',
      statusDesc: 'Success',
      data: result
    })


  } catch (error) {

  }

})
router.post('/getAllVendors', async (req, res) => {

  try {

    let result = await VendorModel.find({});

    if (!result.length > 0) throw new Error('Failed')

    res.json({
        statusCode: '0',
        statusDesc: 'Success',
        data: result
      })


  } catch (error) {
    res.json({
      statusCode: '1',
      statusDesc: 'Failed',
      data: ''
    })
  }

})
router.post('/getAllCategories', async (req, res) => {

  try {

    let result = await CategoryModel.find({});

    if (!result.length > 0) throw new Error('Failed')

    res.json({
      statusCode: '0',
      statusDesc: 'Success',
      data: result
    })


  } catch (error) {

  }

})
router.post('/deleteVendor', async (req, res) => {

  try {

    let vendorId = req.body.vendorId
    let result = await VendorModel.findOneAndDelete({_id:vendorId},{new:true});

    if (!result._id) throw new Error('Failed')

    res.json({
      statusCode: '0',
      statusDesc: 'Success',
      data: result
    })


  } catch (error) {

  }

})
router.post('/deleteCategory', async (req, res) => {

  try {

    let categoryId = req.body.categoryId
    let result = await CategoryModel.findOneAndDelete({_id:categoryId},{new:true});

    if (!result._id) throw new Error('Failed')

    res.json({
      statusCode: '0',
      statusDesc: 'Success',
      data: result
    })


  } catch (error) {

    res.json({
      statusCode: '1',
      statusDesc: 'Failed',
      data: ''
    })

  }

})
router.post('/deleteProduct', async (req, res) => {

  try {

    let productId = req.body.productId
    let result = await ProductModel.findOneAndDelete({_id:productId},{new:true});

    if (!result._id) throw new Error('Failed')

    res.json({
      statusCode: '0',
      statusDesc: 'Success',
      data: result
    })


  } catch (error) {

    res.json({
      statusCode: '1',
      statusDesc: 'Failed',
      data: ''
    })

  }

})





module.exports = router;
