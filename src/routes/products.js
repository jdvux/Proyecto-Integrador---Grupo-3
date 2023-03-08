const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multerProducts');
const createProductValidations = require('../middlewares/createProductValidations');
const editProductValidations = require('../middlewares/editProductValidations');
const productsController = require('../controllers/productsController');
const uploadProducts = require('../middlewares/multerProducts');

router.get('/', productsController.products);
router.get('/:id', productsController.productDetail);
router.get('/productCart', productsController.productCart);

router.get('/createProduct', productsController.create);
router.post('/createProduct', uploadProducts.array('productImagesCreate'), createProductValidations, productsController.store);

router.get('/editProduct/:id', productsController.edit);
router.put('/editProduct/:id', uploadProducts.array('productImagesEdit'), editProductValidations, productsController.update);

router.get('/deleteProduct/:id', productsController.deleteProduct);
router.delete('/deleteProduct/:id', productsController.destroyProduct);

module.exports = router;

