const express = require('express')
const app = express()
const dotenv = require("dotenv");

dotenv.config({ path: './.env' });

app.get('/', (req, res) => {
    res.send('<h1>hello from backend</h1>')
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})