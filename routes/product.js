const express = require('express')
const app = express.Router()
const upload = require('../config/milter')
const productModel = require('../models/product')
app.post('/create', upload.single('image'), async (req, res) => {
    try {
        let {name,price,discount,bgColor,panelColor,textColor} = req.body
        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor
           
        });
       await product.save();
       req.flash("success","Product uploaded successfully");
       res.redirect('/owner/admin')
    } 
    catch (error) {
        res.status(500).send('Error uploading file: ' + error.message);
    }
})

module.exports = app;