const jwt = require('jsonwebtoken');
const userModel = require('../models/user')

module.exports = async function(req, res, next) {
    if (!req.cookies.token) {
        req.flash("error", "You need to be logged in first");
        return res.redirect('/');
    }
    try {
        let decode = jwt.verify(req.cookies.token, process.env.jwt_key);
        let user = await userModel
            .findOne({ email: decode.email })
            .select("-password");

       
        req.user = user; // Ensure this is being set correctly
        next();
    } catch (error) {
        console.error("JWT Error:", error); // Log the error
        req.flash("error", "Something went wrong.");
        return res.redirect('/');
    }
}
