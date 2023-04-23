const express = require ('express');
const router = express.Router();
const createProductValidations = require('../middlewares/createProductValidations');
const editProductValidations = require('../middlewares/editProductValidations');
const productsController = require('../controllers/productsController');
const uploadProducts = require('../middlewares/multerProducts');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/productCart', productsController.productCart);

router.get('/createProduct', adminMiddleware, productsController.create);
router.post('/createProduct', uploadProducts.array('productImagesCreate'), createProductValidations, productsController.store);

router.get('/editProduct/:id', adminMiddleware, productsController.edit);
router.put('/editProduct/:id', uploadProducts.array('productImagesEdit'), editProductValidations, productsController.update);

router.get('/deleteProduct/:id', adminMiddleware, productsController.deleteProduct);
router.delete('/deleteProduct/:id', productsController.destroyProduct);

router.get('/', productsController.products);
router.get('/:id', productsController.productDetail);

module.exports = router;

