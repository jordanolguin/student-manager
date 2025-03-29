require('dotenv').config();
const mongoose = require('mongoose');

const localURI = 'mongodb://127.0.0.1:27017/student-manager';

mongoose.connect(process.env.MONGODB_URI || localURI);

module.exports = mongoose.connection;