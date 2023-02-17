const fs = require('fs')
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');


const productController = {
    productCart: (req, res) => {
        res.render('cart')
    },

    // Aquí va la antigua propiedad que quedó comentada:
    // productForm: (req, res) => {
    //     res.render('productForm')
    // },

    getProducts: (req, res) => {

        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        

        res.render('products', {products})
    },

    detail: (req, res) => {

        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        const id = req.params.id

        let product = products.find(product => product.id == id)

        res.render('productDetail', {product})
    },

    createProduct: (req, res) => {
        res.render('createProduct')
    },

    editProduct: (req, res) => {
        res.render('editProduct')
    }
    
}

module.exports = productController;
