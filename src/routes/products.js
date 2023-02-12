const express = require ('express')
const router = express.Router()

const productController = require('../controllers/productsController')


router.get('/productDetail', productController.productDetail)

router.get('/productCart', productController.productCart)

router.get('/productForm', productController.productForm);

router.get('/', productController.getProducts);

router.get('/create', productController.productForm);

router.get('/:id', productController.detail)


module.exports = router