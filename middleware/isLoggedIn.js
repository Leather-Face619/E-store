var jwt = require('jsonwebtoken');
const userModel = require('../models/user')

module.exports = async function(req, res, next){
    if (!req.cookies.token) {
        req.flash("error", "you need to logged in first")
        return res.redirect('/')
    }
try {
    let decode =  jwt.verify(req.cookies.token,process.env.jwt_key) 
let user = await userModel.findOne({
    email:decode.email
}).select("-password")
req.user = user
next()

} catch (error) {
    req.flash("error", "Something went wrong.")
return res.redirect('/')

}
}