const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://fy50167:50167@cluster0.aqazdtw.mongodb.net/');

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
  console.log('MongoDB connected successfully!');
});

module.exports = db;
