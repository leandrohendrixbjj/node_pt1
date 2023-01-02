const livroRoutes = require('../Livros/routes.js');
const bodyParser = require('body-parser');

module.exports = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))

    app.get('/', (req, res) => {
        res.send("Welcome")
    });

    app.use('/livros', livroRoutes);

}