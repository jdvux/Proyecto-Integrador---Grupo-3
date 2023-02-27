const express = require('express');
const app = express();
const path = require('path');
const PORT = 3003 || process.env.PORT;
const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const methodOverride = require('method-override');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

// soportar lo que envíe el usuario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(mainRoutes);
app.use('/users', userRoutes);
app.use('/products',productRoutes);

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
})
