const app = require('express')();
require('./app/routes.js')(app)

module.exports = app;