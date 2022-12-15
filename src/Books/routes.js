const route = require('express').Router();

route.get('/', (req, res) => {
    res.marko(
        require('../app/views/books/list.marko')
    );
});

module.exports = route;