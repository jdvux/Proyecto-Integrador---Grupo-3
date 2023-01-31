const productController = {
    productDetail: (req, res) => {
        res.render('productDetail')
    },

    productCart: (req, res) => {
        res.render('cart')
    },

    productForm: (req, res) => {
        res.render('productForm')
    }
}

module.exports = productController;
