const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');

//Carrito de compras
router.get('/productCart', productController.productCart);

//Edición de productos
router.get('/editProduct/:id', productController.edit);
router.put('/editProduct/:id', productController.update);
//Creación de productos
router.get('/createProduct', productController.create);
router.post('/createProduct', productController.store);
//Eliminar productos
router.get('/deleteProduct/:id', productController.delete);
router.delete('/deleteProduct/:id', productController.remove);
//Listado de productos
router.get('/', productController.products);
router.get('/:id', productController.productDetail);

//Listado de productos

//router.get('/:id', productController.detail);
// Aquí va la ruta antigua que quedó comentada:
// router.get('/create', productController.productForm);

module.exports = router;
