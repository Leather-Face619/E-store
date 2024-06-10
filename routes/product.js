const express = require('express')
const app = express.Router()

app.get('/product',(req,res)=>{
    res.send("product")
})

module.exports = app;