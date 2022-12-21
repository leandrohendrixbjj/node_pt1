const route = require('express').Router();
const db = require('../config/database.js');
const LivroDao = require('../infra/livro-dao.js');

route.get('/', (req, res) => {
    let livro = new LivroDao(db);
    livro.listaLivros((error, data) => {
        res.marko(
            require('../app/views/books/list.marko'),
            {
                livros: data
            }
        );
    });
});

module.exports = route;