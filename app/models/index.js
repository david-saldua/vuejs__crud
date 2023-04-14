
//define and locate db config
const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
// set mongoose promise to global promise
mongo.Promise = global.Promise;

//create a db object

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);

module.exports = db;