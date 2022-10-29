// # Import Config DB (../../config/db.config.js)
const dbConfig = require('../../config/db.config');
// # Import Mongoose 
const mongoose = require('mongoose');

// # Panggil Mongoose (Setup Mongoose)
mongoose.Promise = global.Promise;

// # Buat Object DB 
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

module.exports = db;