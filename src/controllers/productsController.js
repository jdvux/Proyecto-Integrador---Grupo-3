const productController = {
    productDetail: (req, res) => {
        res.render('productDetail')
    },

    productCart: (req, res) => {
        res.render('cart')
    },

    createProduct: (req, res) => {
        res.render('createProduct')
    },
    editProduct: (req, res) => {
        res.render('editProduct')
    }
}

module.exports = productController;
