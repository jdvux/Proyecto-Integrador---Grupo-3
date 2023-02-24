const { body } = require('express-validator');

const validateRegister = [
    body('name')
    .isAlpha().withMessage('El nombre sólo puede contener letras').bail()
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    body('last-name')
    .isAlpha().withMessage('El apellido sólo puede contener letras').bail()
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos dos caracteres'),

    body('email')
    .notEmpty().withMessage('Debes escribir tu correo electrónico').bail()
    .isEmail().withMessage('El del correo formato debe ser correo@correo.xxx'),

    body('password')
    .isLength({ min: 8 }).withMessage('La contraseña debe contener al menos 8 caracteres').bail()
    .isAlphanumeric().withMessage('La contraseña debe contener al menos una letra y un número'),

    body('terms-conditions')
];

const validateLogin = [
    body('username')
    .isEmail().withMessage('Debes ingresar tu correo electrónico').bail(),

    body('password')
    .notEmpty().withMessage('Debes ingresar tu contraseña').bail()
];

const validateCreateProduct = [
    body('name')
    .isLength({ min: 8 }).withMessage('El nombre debe tener al menos 8 caracteres'),
    
    body('description')
    .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),

    body('productImages')
    .custom((productImages, { req }) => {
        if (!req.files) return false;
        return true;
    }).withMessage("Debes subir al menos una imagen").bail()

    .custom((productImages, { req }) => {
        if (req.files.mimetype === 'image/jpeg' || 'image/jpeg' || 'image/jpg' || 'image/png' || 'image/gif') 
        { return true } else { return false }
    }).withMessage("Sólo puedes subir imágenes o GIFs"),

    body('size')
    .isNumeric().withMessage('El talle debe ser ingresado en números').bail()
    .isLength({ min: 2, max: 2 }).withMessage('El talle debe contener dos números'),

    body('category')
    .isAlpha().withMessage('La categoría sólo debe contener letras').bail()
    .isLength({ min: 4 }).withMessage('El nombre de la categoría debe tener al menos 4 caracteres'),

    body('oldPrice')
    .notEmpty().withMessage('Debes ingresar el precio del producto').bail()
    .isNumeric().withMessage('El precio original debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio original no puede ser menor a 10000'),
    
    body('price')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio en descuento no puede ser menor a 10000').bail()
    .custom((price, { req }) => {
        if (price >= req.body.oldPrice) { return false };
    return true;
    }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
];

const validateEditProduct = [
    body('name')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    body('description')
    .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),
    
    body('size')
    .isNumeric().withMessage('El talle debe ser ingresado en números')
    .isLength({ min: 2, max: 2 }).withMessage('El talle debe contener dos números'),

    body('productImages')
    .custom((productImages, { req }) => {
        if (req.files.mimetype === 'image/jpeg' || 'image/jpeg' || 'image/jpg' || 'image/png' || 'image/gif') 
        { return true } else { return false };
    }).withMessage("Sólo puedes subir imágenes o GIFs"),

    body('category')
    .isAlpha().withMessage('La categoría sólo debe contener letras').bail()
    .isLength({ min: 4 }).withMessage('El nombre de la categoría debe tener al menos 4 caracteres'),

    body('oldPrice')
    .isNumeric().withMessage('El precio original debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio original no puede ser menor a 10000'),
    
    body('price')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio en descuento no puede ser menor a 10000').bail()
    .custom((price, { req }) => {
        if (price >= req.body.oldPrice) { return false };
    return true;
    }).withMessage("El precio en descuento no puede ser mayor o igual al precio original")
]

module.exports = validateRegister;
module.exports = validateLogin;
module.exports = validateCreateProduct;
module.exports = validateEditProduct;
