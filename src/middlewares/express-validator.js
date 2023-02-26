const { body } = require('express-validator');

const rulesRegister = [
    body('nameRegister')
    .isAlpha().withMessage('El nombre sólo puede contener letras').bail()
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    body('lastNameRegister')
    .isAlpha().withMessage('El apellido sólo puede contener letras').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos dos caracteres'),

    body('emailRegister')
    .notEmpty().withMessage('Debes escribir tu correo electrónico').bail()
    .isEmail().withMessage('El del correo formato debe ser correo@correo.xxx'),

    body('passwordRegister')
    .isLength({ min: 8 }).withMessage('La contraseña debe contener al menos 8 caracteres').bail()
    .isAlphanumeric().withMessage('La contraseña debe contener al menos una letra y un número'),

    body('termsAndConditions')
];

const rulesLogin = [
    body('passwordLogin')
    .isEmail().withMessage('Debes ingresar tu correo electrónico').bail(),

    body('passwordLogin')
    .notEmpty().withMessage('Debes ingresar tu contraseña').bail()
];

const rulesCreate = [
    body('productNameCreate')
    .isLength({ min: 8 }).withMessage('El nombre debe tener al menos 8 caracteres'),
    
    body('productDescriptionCreate')
    .isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres'),

    body('productImagesCreate')
    .custom((productImagesCreate, { req }) => {
        if ((req.files).length < 1) return false;
        return true;
    }).withMessage("Debes subir al menos una imagen").bail()

    .custom((productImagesCreate, { req }) => {
        if (req.files.mimetype === 'image/jpeg' || 'image/jpeg' || 'image/jpg' || 'image/png' || 'image/gif') 
        { return true } else { return false }
    }).withMessage("Sólo puedes subir imágenes o GIFs"),

    body('productSizeCreate')
    .isNumeric().withMessage('El talle debe ser ingresado en números').bail()
    .isLength({ min: 2, max: 2 }).withMessage('El talle debe contener dos números'),

    body('productCateogryCreate')
    .isAlpha().withMessage('La categoría sólo debe contener letras').bail()
    .isLength({ min: 4 }).withMessage('El nombre de la categoría debe tener al menos 4 caracteres'),

    body('productOriginalPriceCreate')
    .notEmpty().withMessage('Debes ingresar el precio del producto').bail()
    .isNumeric().withMessage('El precio original debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio original no puede ser menor a 10000'),
    
    body('productDiscountPriceCreate')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio en descuento no puede ser menor a 10000').bail()
    .custom((price, { req }) => {
        if (price >= req.body.oldPrice) { return false };
    return true;
    }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
];

const rulesEdit = [

    body('productNameEdit')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    body('productDescriptionEdit')
    .isLength({ min: 10 }).withMessage('La descripción debe tener al menos 10 caracteres'),

    body('productImagesEdit')
    .custom((productImagesEdit, { req }) => {
        if (req.files.mimetype === 'image/jpeg' || 'image/jpeg' || 'image/jpg' || 'image/png' || 'image/gif') 
        { return true } else { return false };
    }).withMessage("Sólo puedes subir imágenes o GIFs"),

    body('productSizeEdit')
    .isNumeric().withMessage('El talle debe ser ingresado en números')
    .isLength({ min: 2, max: 2 }).withMessage('El talle debe contener dos números'),

    body('productCateogryEdit')
    .isAlpha().withMessage('La categoría sólo debe contener letras').bail()
    .isLength({ min: 4 }).withMessage('El nombre de la categoría debe tener al menos 4 caracteres'),

    body('productOriginalPriceEdit')
    .isNumeric().withMessage('El precio original debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio original no puede ser menor a 10000'),
    
    body('productDiscountPriceEdit')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio en descuento no puede ser menor a 10000').bail()
    .custom((price, { req }) => {
        if (price >= req.body.oldPrice) { return false };
    return true;
    }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
];

module.exports = rulesCreate, rulesEdit, rulesLogin, rulesRegister;
