const express = require ('express')
const router = express.Router()

const productController = require('../controllers/productsController')


router.get('/productDetail', productController.productDetail)

router.get('/productCart', productController.productCart)

router.get('/createProduct', productController.createProduct);

router.get('/editProduct', productController.editProduct);

router.get('/', productController.getProducts);

// Aquí va la ruta antigua que quedó comentada:
// router.get('/create', productController.productForm);

router.get('/:id', productController.detail)

