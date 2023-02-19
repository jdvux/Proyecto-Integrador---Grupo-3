const express = require ('express')
const router = express.Router()
const productController = require('../controllers/productsController');
const upload = require ('../middlewares/multer')

router.get('/', productController.getProducts);

//Renderiza formulario de creacion
router.get('/createForm', productController.createProductForm);

router.get('/:id', productController.detail)

//crea productos
router.post('/', upload.array('imageFile'), productController.createProduct);


router.get('/productCart', productController.productCart)


// router.get('/:id/edit', productController.editProduct);


// Aquí va la ruta antigua que quedó comentada:


module.exports = router