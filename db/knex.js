var env = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[env];

console.log("ENV", env)
console.log("CONFIG", config)

module.exports = require('knex')(config);
