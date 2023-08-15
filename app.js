const express = require('express');
const app = express();

const path = require('path');

const PORT = 3050;

 app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(PORT, () => console.log('Servidor corriendo'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'))
})