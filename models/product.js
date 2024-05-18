const mongoose = require('mongoose')
const proSchema = mongoose.Schema({
    product: String,
    image: String,
    name: String,
    price: Number,
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    bgColor: String,
    panelColor: String,
    textColor: String
})
const product = mongoose.model('product', proSchema)
module.exports = product