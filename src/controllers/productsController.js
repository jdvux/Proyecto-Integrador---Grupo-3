const fs = require('fs')
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');


const productController = {
    productCart: (req, res) => {
        res.render('cart')
    },

    getProducts: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('products', {products});
    },

    detail: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;

        let product = products.find(product => product.id == id);

        res.render('productDetail', {product});
    },

    createProduct: (req, res) => {
        res.render('createProduct');
    },

    editProduct: (req, res) => {
        res.render('editProduct');
    },

    deleteProduct: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        let product = products.find(product => product.id == id);
        
        res.render('deleteProduct', {
            title: 'Eliminar Producto',
            product
        })
    },
    
    destroyProduct: (req, res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        let product = products.find(product => product.id == id);

        let newProducts = products.filter(product => product.id !== id); 

        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));

        res.redirect('/products');
    }
}

module.exports = productController;
