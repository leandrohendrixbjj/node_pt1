const livroRoutes = require('../Livros/routes.js');
const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/static', express.static('src/app/public'))

    app.use(methodOverride((req, res, next) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    app.get('/', (req, res) => {
        res.send("Welcome")
    });

    app.use('/livros', livroRoutes);

}