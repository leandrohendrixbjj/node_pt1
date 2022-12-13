const route = require('express').Router();

route.get('/', (req, res) => {
    res.send("Welcome to books main")
});

module.exports = route;