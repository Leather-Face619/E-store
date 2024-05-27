const express = require('express')
const app = express.Router()
const ownerModel = require('../models/owner')

app.get('/', (req, res) => {
    res.send("owner hu mai")
})
app.post('/create', async (req, res) => {
    const owner = await ownerModel.find()
    if (owner.length > 0) {
        return res.send("you have no permission to create new Owner")
    }
    else {
        let {fullName,email,password} = req.body
        const newOwner = await ownerModel.create({
            fullName,
            email,
            password,
        })

        return res.send("owner created successfully " + newOwner)
    }
})

module.exports = app;