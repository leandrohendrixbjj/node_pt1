console.clear();

const http = require('http');
const html = require('./html.js');

const server = http.createServer((req, res) => {
    res.end(html);
})

server.listen(3000, () => {
    console.log(`Server is running at 3000`)
});
