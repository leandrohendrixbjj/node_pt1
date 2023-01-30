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

route.put('/edit', async (req, res) => {
    try {
        let livro = new LivroDao(db);
        await livro.edit(req.body);
        res.redirect('/livros');
    } catch (error) {
        console.log("edit", error);
        res.status(404).json({ error })
    }
})

route.get('/form/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let livroDao = new LivroDao(db);
        res.marko(
            require('../app/views/books/formEdit.marko'), { livro: await livroDao.find(id) });
    } catch (error) {
        console.log("edit", error);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const livro = new LivroDao(db);
        await livro.delete(id);
        res.redirect('/livros')
    } catch (error) {
        console.log(error)
    }
});

module.exports = route;