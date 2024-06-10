const userModel = require('../models/user')

const {generateToken} = require('../utils/generateToken')

module.exports.registerUser = async (req,res)=>{
    try {
        let { password, email, fullName } = req.body
        let user = await userModel.findOne({email:email})
        if (user) {
            res.send("user is already exist")
        } else {
            
            let user = await userModel.create({
                email,
                password,
                fullName
            })
        let token = generateToken(user)
           res.cookie("token",token)
            res.send("user created successfully")
        }
    } catch (error) {
        res.send(error.message)
    
       
    }
}

module.exports.loginUser = async (req,res)=>{
    try {
        let {email,password} = req.body
        let user = await userModel.findOne({email:email,password:password})
        if (user) {
            let token = generateToken(user)
            res.cookie("token",token)
           
            res.redirect("/shop")
        } else {
            req.flash( "error"," Email or password is incorrect.")
            res.redirect("/")
        }
    } catch (error) {
        res.send(error.message)
    }
}

module.exports.logoutUser = (req,res)=>{
    res.clearCookie("token")
    res.redirect("/")
}