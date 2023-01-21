const express = require ('express');
const app = express();
const path = require ('path')
const PORT = 3003

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/cart.html'))
});

app.get('/terms-conditions', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/terms-conditions.html'))
});

app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})