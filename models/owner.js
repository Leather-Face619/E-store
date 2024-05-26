const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
   
    products: {
        type: Array,
        default: []
    },
    gst: String,
    pictures:String
})

const Owner = mongoose.model('Owner', schema)

module.exports = Owner