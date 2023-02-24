const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require('../middlewares/express-validator');

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
    if(!errors.isEmpty()) {
      return res.render('products/createProduct', {
        errors: errors.mapped(), old: req.body
      });
    };
    
    let date = Date.now();
    let images = [];

    if (req.files) {
      req.files.forEach(file=>{images.push("/products/" + file.filename)});
    };

    let newProduct = {
      "id": date.toString(),
      "name": req.body.name || "Sin nombre", 
      "description": req.body.description,
      "image": images,
      "size": req.body.size,
      "category": req.body.category,
      "oldPrice": req.body.oldPrice,
      "price": req.body.price
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
    let errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.render('products/editProduct', {
        errors: errors.mapped(), old: req.body
      });
    };

    let id = req.params.id;
    
    products.forEach((product, index) => {
      let images = [];
      if (product.id == id){
      product.name = req.body.name;
      product.description = req.body.description;
      product.size = req.body.size;
      product.category = req.body.category;
      product.oldPrice = req.body.oldPrice;
      product.price = req.body.price;
      if((req.files).length !==0) {
        req.files.forEach(file=>{images.push("/products/" + file.filename)})
        product.image = images 
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
    let newProducts = products.filter(product => product.id !== id); 

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    res.redirect('/products');
  }
}
  
  // delete: (req, res) => {
  //   res.render('products/delete')
  // },

  // remove: (req, res) => {},
  
  // Aquí va la antigua propiedad que quedó comentada:
  // productForm: (req, res) => {
  //     res.render('productForm')
  // },
  
  
  // detail: (req, res) => {
  //   let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  //   const id = req.params.id;
  
  //   let product = products.find(product => product.id == id);
  
  //   res.render('products/productDetailtest', { product });
  // },


module.exports = productController;
