const express = require('express');
const app = express();
const path = require('path');
const PORT = 3003;
<<<<<<< HEAD

const methodOverride = require('method-override');

=======
>>>>>>> dc247ad2cb16087d0c2b0ab0d4551ba182b89ed9
const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');
const methodOverride = require('method-override');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));
// soportar lo que envíe el usuario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
<<<<<<< HEAD

app.use(express.static('public'));

=======
app.use(express.static('public'));

app.use(mainRoutes);
app.use('/products',productRoutes);
app.use(userRoutes);

app.use(productRoutes);
app.use(userRoutes);
>>>>>>> dc247ad2cb16087d0c2b0ab0d4551ba182b89ed9
app.use(mainRoutes);
app.use('/users', userRoutes);
app.use('/products',productRoutes);

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
})
