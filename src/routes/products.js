const express = require ('express');
const router = express.Router();

const uploadProductImages = require('../middlewares/multer');

const validateCreateProduct = require('../middlewares/express-validator');
const validateEditProduct = require('../middlewares/express-validator');

const productController = require('../controllers/productsController');


router.get('/productCart', productController.productCart);

router.get('/createProduct', productController.create);
router.post('/createProduct', uploadProductImages.array('productImages'), validateCreateProduct, productController.store);

router.get('/editProduct/:id', productController.edit);
router.put('/editProduct/:id', uploadProductImages.array('productImages'), validateEditProduct, productController.update);

router.get('/deleteProduct/:id', productController.deleteProduct);
router.delete('/deleteProduct/:id', productController.destroyProduct);

router.get('/', productController.products);
router.get('/:id', productController.productDetail);


//router.get('/', productController.getProducts);

// Aquí va la ruta antigua que quedó comentada:
// router.get('/create', productController.productForm);

//router.get('/:id', productController.detail)

module.exports = router

