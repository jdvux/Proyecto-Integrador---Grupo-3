const express = require ('express');
const app = express();
const path = require ('path');
const PORT = 3003

const mainRoutes = require('./routes/main');
const productRoutes = require ('./routes/products')
const userRoutes = require('./routes/user')

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.static('../public'))

app.use(productRoutes)
app.use(userRoutes)
app.use(mainRoutes)


app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})
