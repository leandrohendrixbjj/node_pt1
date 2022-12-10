console.clear();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = require('./src/index.js');

app.listen(PORT, () => {
    console.log(`Server is Running at ${3000}`);
});
