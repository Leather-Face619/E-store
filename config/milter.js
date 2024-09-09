const multer = require('multer');

// Set up Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = upload