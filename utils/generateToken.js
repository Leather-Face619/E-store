var jwt = require('jsonwebtoken');
function generateToken (user) {
    return jwt.sign({user:user.email ,id: user._id},process.env.jwt_key)   
}
module.exports.generateToken = generateToken
 