console.clear();
require('dotenv').config();

const http = require('http');
const html = require('./html.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    if (req.url == '/')
        res.end(html.main);


    if (req.url == '/livros')
        res.end(html.livros);
})

server.listen(PORT, () => {
    console.log(`Server is running at 3000`)
});
