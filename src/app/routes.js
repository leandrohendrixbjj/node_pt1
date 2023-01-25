const livroRoutes = require('../Livros/routes.js');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/static', express.static('src/app/public'))

    app.get('/', (req, res) => {
        res.send("Welcome")
    });

    app.use('/livros', livroRoutes);

}