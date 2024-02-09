const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://fy50167:50167@cluster0.aqazdtw.mongodb.net/character');


module.exports = mongoose.connection;
