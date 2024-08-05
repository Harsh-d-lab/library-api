const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/library',
    port: process.env.PORT || 3000
};
