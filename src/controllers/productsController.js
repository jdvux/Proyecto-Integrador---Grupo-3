const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

const productController = {
  products: (req, res) => {  
    res.render('products/products', { products });
  },

  productDetail: (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id === id);

    res.render('products/productDetail', { product });
  },

  productCart: (req, res) => {
    res.render('products/cart');
  },
  
  create: (req, res) => {
    res.render('products/createProduct');
  },

  store: (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('products/createProduct', {
        errors: errors.mapped(), 
        old: req.body
      });
    };

    let date = Date.now();
    let images = [];

    if (req.files) {
      req.files.forEach(file => {
        images.push(file.filename)
      });
    };

    let newProduct = {
      "id": date.toString(),
      "name": req.body.name,
      "description": req.body.description,
      "images": images,
      "size": req.body.size,
      "category": req.body.category,
      "originalPrice": req.body.originalPrice,
      "discountPrice": req.body.discountPrice
    };
  
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products');
  },

  edit: (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id === id);
    res.render('products/editProduct', { product });
  },
  
  update: (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id === id);

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('products/editProduct', {
        product,
        errors: errors.mapped(),
        old: req.body
      });
    };

    let images = [];

    products.forEach(product => {
      if (product.id == id) {
      product.name = req.body.name;
      product.description = req.body.description;
      product.size = req.body.size;
      product.category = req.body.category;
      product.originalPrice = req.body.originalPrice;
      product.discountPrice = req.body.discountPrice;
      if ((req.files).length > 0) {
        req.files.forEach(file => {
          images.push(file.filename) 
        });
      product.images = images;
      };
    }
  });
      
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products');
  },

  deleteProduct: (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id == id);
    
    res.render('products/deleteProduct', {
        title: 'Eliminar Producto',
        product
    })
},

destroyProduct: (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id === id);
    let newProducts = products.filter(element => element !== product); 

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    res.redirect('/products');
  }
}

module.exports = productController;
