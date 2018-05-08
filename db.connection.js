const mongoose = require('mongoose');
const bluebird = require('bluebird');

let db = null;

let options = {
    poolSize: 10,
    user: process.env.DB_USERNAME || '',
    pass: process.env.DB_PASSWORD || '',
}

mongoose.connect(process.env.DB_URL || 'mongodb://localhost/test', options);
mongoose.Promise = bluebird;

db = mongoose.connection;

global.db = db;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database is successfully running.'));

module.exports = db;