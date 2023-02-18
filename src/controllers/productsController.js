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

    createProductForm: (req, res) => {
        res.render('createProduct')
    },

    editProduct: (req, res) => {
        res.render('editProduct')
    },

    // createProduct: (req, res) => {
    //     const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
    //     const product = req.body;
    //     const newProduct = {
    //         id: products.lenght > 0 ? products[products.lenght - 1].id + 1 : 1,
    //         ...data,
    //         image: req.file ? req.file.filename : 'default-image.png'
    //     };
    //     products.push(newProduct)
    //     fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    //     res.redirect('/products');
    // }
    
}

module.exports = productController;
