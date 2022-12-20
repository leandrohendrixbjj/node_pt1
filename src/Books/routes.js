const route = require('express').Router();
const db = require('../config/database.js');

route.get('/', (req, res) => {
    db.all('SELECT * FROM livros', (error, result) => {
        res.marko(
            require('../app/views/books/list.marko'),
            {
                livros: result
            }
        );
    });
});

module.exports = route;