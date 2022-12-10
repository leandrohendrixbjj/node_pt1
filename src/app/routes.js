const routes = (app) => {

    app.get('/', (req, res) => {
        res.send("Welcome  to main")
    });
}

module.exports = routes;