const app = require('express')();
const routes = require('./app/routes.js');

routes(app);

module.exports = app;