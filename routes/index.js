const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')
const productModel = require('../models/product')
router.get('/',function (req,res) {
    let error = req.flash("error")
    res.render("index",{error})
})
router.get('/shop',isLoggedIn,async (req,res)=>{
    let products = await productModel.find()
    res.render('shop' , {products})
})
module.exports = router