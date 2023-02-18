const fs = require('fs')
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');


const productController = {
    productCart: (req, res) => {
        res.render('cart')
    },

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

    createProduct: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        const data = req.body;
        const newProduct = {
            id: String(Date.now()),
            ...data,
            image: req.file ? req.file.filename : ['default-image.png']
        };
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/products');
    }
    
}

module.exports = productController;
