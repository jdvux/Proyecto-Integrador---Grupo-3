const express = require ('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/productCart', productController.productCart);

router.get('/createProduct', productController.createProduct);

router.get('/editProduct', productController.editProduct);

router.get('/', productController.getProducts);

router.get('/:id', productController.detail);

// eliminar productos
router.get('/:id/delete', productController.deleteProduct);
router.delete('/:id/delete', productController.destroyProduct);


module.exports = router