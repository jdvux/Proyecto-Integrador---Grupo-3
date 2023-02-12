const express = require ('express')
const router = express.Router()

const productController = require('../controllers/productsController')


router.get('/productDetail', productController.productDetail)

router.get('/productCart', productController.productCart)

router.get('/createProduct', productController.createProduct);

router.get('/editProduct', productController.editProduct);


module.exports = router