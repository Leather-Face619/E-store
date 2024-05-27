const mongoose = require('mongoose')
const dbugr = require("debug")("development:mongoose")

mongoose.connect("mongodb://localhost:27017/sketch").then(
    function () {
        dbugr("connected");
    }
).catch(
    function (err) {
        console.log(err);
    }
)
module.exports = mongoose.connection