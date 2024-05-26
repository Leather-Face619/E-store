const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    pictures:String
})

const User = mongoose.model('User', schema)

module.exports = User