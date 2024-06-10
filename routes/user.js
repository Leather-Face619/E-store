const express = require('express')
const app = express.Router()
const {registerUser,loginUser,logoutUser} = require('../controllers/AuthController')
app.get('/', (req, res) => {
    res.send("user")
})
app.post('/register', registerUser)
app.post('/login', loginUser)
app.get('/logout',logoutUser)

module.exports = app;