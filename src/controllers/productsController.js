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

    createProduct: (req, res) => {
        console.log(req.files[0].filename, "primer img")
        const files = req.files
        const filename = files.map(file => file.filename)
        console.log('filename',filename);
    
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
            
            const newProduct = {
                'id': String(Date.now()),
                'name': req.body.name || 'Sin nombre',
                'description': req.body.description || 'Sin descripcion',
                'image': filename,
                'category': req.body.category || 'Sin categoria',
                'size': req.body.size || 35,
                'price': req.body.price || 0
    
                // image: req.file ? req.file.filename + path.extname(file.originalname) : ['default-image.png']
            };
            products.push(newProduct)
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
            res.redirect('/products');
        },

        editProductForm: (req, res) => {
            let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
            const id = req.params.id
            const product = products.find(product => product.id == id)
            res.render('editProduct', {product})
        },

        edit: (req, res) => {
            let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
            const id = req.params.id

            products.forEach((product, index) => {
                if (product.id == id) {
                    console.log("producto viejo",product);
                    product.name = req.body.name;
                    product.description = req.body.description;
                    product.category = req.body.category;
                    product.price = req.body.price;

                    products[index] = product;
                    console.log("producto nuevo",product);

                }
            });

            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

            res.redirect('/products');
        },
        delete: (req, res) => {
            let id = req.params.id;
            let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
            
            let newProducts = products.filter(product => product.id !== id)

            fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));

            res.redirect('/products');
        }
}

module.exports = productController;
