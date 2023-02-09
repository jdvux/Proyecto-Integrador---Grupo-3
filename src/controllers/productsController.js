const fs = require('fs')
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');


const productController = {
    productDetail: (req, res) => {
        res.render('productDetail')
    },

    productCart: (req, res) => {
        res.render('cart')
    },

    productForm: (req, res) => {
        res.render('productForm')
    },

    getProducts: (req, res) => {

        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        

        res.render('products', {products})}
    
}

module.exports = productController;
