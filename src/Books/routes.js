const route = require('express').Router();

route.get('/', (req, res) => {
    res.marko(
        require('../app/views/books/list.marko'),
        {
            livros: [
                {
                    id: 1,
                    titulo: 'Fundamentos do Node'
                },
                {
                    id: 2,
                    titulo: 'Node Avançado'
                }
            ]
        }
    );
});

module.exports = route;