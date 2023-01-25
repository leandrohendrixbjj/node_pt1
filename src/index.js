require('marko/node-require').install();
require('marko/express');

const app = require('express')();

require('./app/routes.js')(app)

module.exports = app;