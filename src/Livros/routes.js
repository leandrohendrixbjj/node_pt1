const route = require('express').Router();
const db = require('../config/database.js');
const LivroDao = require('../infra/livro-dao.js');

route.get('/', async (req, res) => {
    let livro = new LivroDao(db);
    res.marko(
        require('../app/views/books/list.marko'),
        {
            livros: await livro.list()
        }
    );
});

module.exports = route;