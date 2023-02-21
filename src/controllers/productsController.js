const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    let date = Date.now();
    let newProduct = {
      "id": date.toString(),
      "name": req.body.name || "Sin nombre", 
      "description": req.body.description,
      "image": req.body.image,
      "size": req.body.size,
      "category": req.body.category,
      "oldPrice": req.body.oldPrice,
      "price": req.body.price
    }

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products')
  },

  edit: (req, res) => {
    let id = req.params.id;
    let product = products.find(product => product.id === id);
    res.render('products/editProduct', { product });
  },
  
  update: (req, res) => {
    let id = req.params.id;
    products.forEach((product, index) => {
      if (product.id == id) {
        product.name = req.body.name;
        if ((req.body.image).length == 0) {
          product.image += req.body.image;
          let images1 = product.image;
          product.image = images1.split(",") 
        } else {
        let images2 = product.image;
        product.image = images2.split(",") 
        product.size = req.body.size;
        product.category = req.body.category;
        product.price = req.body.price;     
      }
    }
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/products')
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
    let product = products.find(product => product.id == id);
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
