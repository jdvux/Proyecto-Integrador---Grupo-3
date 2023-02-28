const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { body } = require('express-validator');
const productsController = require('../controllers/productsController');

const createValidations = [
    body("productNameCreate")
        .isLength({ min: 8 }).withMessage("El nombre debe tener al menos 8 caracteres"),
    
    body("productDescriptionCreate")
        .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres"),
    
    body("productImagesCreate")
        .custom((productImagesCreate, { req }) => {
            if (productImagesCreate.length <= 0) {
                return false };
            return true;
        }).withMessage("Debes subir al menos una imagen").bail()
        .custom((productImagesCreate, { req }) => {
            if (productImagesCreate.filetype === "image/jpeg" || "image/jpeg" || "image/jpg" || "image/png" || "image/gif" || "image/avif") 
            { return true }; 
            return false;
        }).withMessage("Sólo puedes subir imágenes"),

    body("productSizeCreate")
        .isNumeric().withMessage("El talle debe ser ingresado en números").bail()
        .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números"),
        
    body("productCateogryCreate")
        .isAlpha().withMessage("La categoría sólo debe contener letras").bail()
        .isLength({ min: 4 }).withMessage("El nombre de la categoría debe tener al menos 4 caracteres"),
        
    body("productOriginalPriceCreate")
        .notEmpty().withMessage("Debes ingresar el precio del producto").bail()
        .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000"),
        
    body("productDiscountPriceCreate")
        .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
        .custom((productDiscountPriceCreate, { req }) => {
            if (productDiscountPriceCreate > req.body.productOriginalPriceCreate) 
            { return false };
            return true;
        }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
];

const editValidations = [
    body("productNameEdit")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres"),
    
    body("productDescriptionEdit")
        .isLength({ min: 10 }).withMessage("La descripción debe tener al menos 10 caracteres"),
    
    body("productImagesEdit")
        .custom((productImagesEdit, { req }) => {
            if (productImagesEdit.filetype === "image/jpeg" || "image/jpeg" || "image/jpg" || "image/png" || "image/gif" || "image/avif") {
                return true };
            return false;
        }).withMessage("Sólo puedes subir imágenes"),

    body("productSizeEdit")
        .isNumeric().withMessage("El talle debe ser ingresado en números")
        .isLength({ min: 2, max: 2 }).withMessage("El talle debe contener dos números"),
    
    body("productCateogryEdit")
        .isAlpha().withMessage("La categoría sólo debe contener letras").bail()
        .isLength({ min: 4 }).withMessage("El nombre de la categoría debe tener al menos 4 caracteres"),
    
    body("productOriginalPriceEdit")
        .isNumeric().withMessage("El precio original debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio original no puede ser menor a 10000"),
        
    body("productDiscountPriceEdit")
        .isNumeric().withMessage("El precio en descuento debe estar expresado en números").bail()
        .isLength({ min: 5 }).withMessage("El precio en descuento no puede ser menor a 10000").bail()
        .custom((productDiscountPriceEdit, { req }) => {
            if (productDiscountPriceEdit > req.body.productOriginalPriceEdit) 
            { return false };
            return true;
        }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
];

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

