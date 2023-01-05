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

route.get('/form', async (req, res) => {
    res.marko(
        require('../app/views/books/form.marko')
    );
});

route.post('/', async (req, res) => {
    try {
        let livro = new LivroDao(db);
        console.log(req.body);
        await livro.add(req.body);
        res.redirect('/livros');
    } catch (error) {
        console.log(error)
    }
});

app.delete('/livros/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const livro = new LivroDao(db);
        await livro.remove(id);
        res.redirect('/livros');
    } catch (error) {
        console.log(error)
    }
});

module.exports = route;