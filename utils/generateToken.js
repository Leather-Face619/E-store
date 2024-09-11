const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.jwt_key, { expiresIn: '1h' });
};

module.exports = { generateToken };
