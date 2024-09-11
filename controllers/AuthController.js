const userModel = require('../models/user')

const {generateToken} = require('../utils/generateToken')
const bcrypt = require('bcrypt');

module.exports.registerUser = async (req, res) => {
    try {
        let { password, email, fullName } = req.body;
        let user = await userModel.findOne({ email: email });
        if (user) {
            res.send("User already exists");
        } else {
            // Hash password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            let user = await userModel.create({
                email,
                password: hashedPassword,  // Store hashed password
                fullName
            });

            let token = generateToken(user);
            res.cookie("token", token);
            res.redirect("/");
        }
    } catch (error) {
        res.send(error.message);
    }
};

module.exports.loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email: email });
        if (user) {
            // Compare hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                let token = generateToken(user);
                res.cookie("token", token);
                res.redirect("/shop");
            } else {
                req.flash("error", "Email or password is incorrect.");
                res.redirect("/");
            }
        } else {
            req.flash("error", "Email or password is incorrect.");
            res.redirect("/");
        }
    } catch (error) {
        res.send(error.message);
    }
};

module.exports.logoutUser = (req,res)=>{
    res.clearCookie("token")
    res.redirect("/")
}