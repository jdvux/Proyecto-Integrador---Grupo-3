const express = require ('express')
const router = express.Router()

const productController = require('../controllers/productsController')


router.get('/productDetail', productController.productDetail)

router.get('/productCart', productController.productCart)

router.get('/productForm', productController.productForm);

router.get('/', productController.getProducts)


module.exports = router