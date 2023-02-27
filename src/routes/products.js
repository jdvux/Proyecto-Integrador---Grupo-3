const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const createValidations = require('../middlewares/express-validator');
const editValidations = require('../middlewares/express-validator');
const productsController = require('../controllers/productsController');

router.get('/productCart', productsController.productCart);

router.get('/createProduct', productsController.create);
router.post('/createProduct', upload, createValidations, productsController.store);

router.get('/editProduct/:id', productsController.edit);
router.put('/editProduct/:id', upload, editValidations, productsController.update);

router.get('/deleteProduct/:id', productsController.deleteProduct);
router.delete('/deleteProduct/:id', productsController.destroyProduct);

router.get('/', productsController.products);
router.get('/:id', productsController.productDetail);

module.exports = router;

