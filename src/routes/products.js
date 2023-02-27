const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validations = require('../middlewares/express-validator');
const productController = require('../controllers/productsController');

router.get('/productCart', productController.productCart);

router.get('/createProduct', productController.create);
router.post('/createProduct', upload, validations, productController.store);

router.get('/editProduct/:id', productController.edit);
router.put('/editProduct/:id', upload, validations, productController.update);

router.get('/deleteProduct/:id', productController.deleteProduct);
router.delete('/deleteProduct/:id', productController.destroyProduct);

router.get('/', productController.products);
router.get('/:id', productController.productDetail);

module.exports = router

