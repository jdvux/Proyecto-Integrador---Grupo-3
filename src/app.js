const express = require ('express');
const app = express();
const path = require ('path');
const PORT = 3003

const mainRoutes = require('./routes/main');
const productRoutes = require ('./routes/products')
const userRoutes = require('./routes/user')

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'))

app.use(express.static('public'))

app.use('/products',productRoutes)
app.use(userRoutes)
app.use(mainRoutes)


app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})
// app.get('/', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, './views/home.html'))
// });

// app.get('/productDetail', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/login.html'))
// });

// app.get('/register', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/register.html'))
// });

// app.get('/productCart', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/cart.html'))
// });

// app.get('/terms-conditions', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './views/terms-conditions.html'))
// });
