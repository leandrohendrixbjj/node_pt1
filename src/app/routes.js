const livroRoutes = require('../Livros/routes.js');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("Welcome")
    });

    app.use('/livros', livroRoutes);
}