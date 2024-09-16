const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')
const productModel = require('../models/product')
const userModel = require('../models/user')
router.get('/',function (req,res) {
    let error = req.flash("error")
    res.render("index",{error , loggedIn:false})
})
router.get('/shop',isLoggedIn,async (req,res)=>{
    let products = await productModel.find()
    let success = req.flash("success")
    res.render('shop' , {products, success})
})
router.get('/cart',isLoggedIn,async (req,res)=>{
    let user = await userModel
    .findOne({ email: req.user.email })
    .populate('cart');
    let bill = Number(user.cart[0].price)+ 200 - Number(user.cart[0].discount)
    res.render('cart',{user,bill})
})
router.get('/addtocart/:productId', isLoggedIn, async function(req, res) {
   // console.log("User from req:", req.user); // Check if req.user is populated correctly
    let user = await userModel.findOne({ email: req.user.email }); // Use the correct field name
    if (!user) {
        req.flash("error", "User not found");
        return res.redirect('/shop');
    }

    user.cart.push(req.params.productId);
    await user.save();
    req.flash("success", "Added to cart");
    res.redirect('/shop');
});
module.exports = router