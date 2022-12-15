const booksRoute = require('../Books/routes.js');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("Welcome")
    });

    app.use('/books', booksRoute);
}