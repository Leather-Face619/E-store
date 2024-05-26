const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/sketch").then(
    function (params) {
        console.log("connected");
    }
).catch(
    function (err) {
        console.log(err);
    }
)
module.exports = mongoose.connection