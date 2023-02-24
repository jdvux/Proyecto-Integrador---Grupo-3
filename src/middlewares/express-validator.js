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
    .isEmail().withMessage('El del correo formato debe ser correo@correo.com'),

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

    body('upload-product')
    .notEmpty().withMessage('Debes subir al menos una imagen para el producto').bail(),

    body('size')
    .notEmpty().withMessage('Debes ingresar el talle del producto').bail()
    .isNumeric().withMessage('El talle debe ser ingresado en números'),

    body('category')
    .isAlpha().withMessage('La categoría sólo debe contener letras').bail()
    .isLength({ min: 4 }).withMessage('El nombre de la categoría debe tener al menos 4 caracteres'),

    body('oldPrice')
    .notEmpty().withMessage('Debes ingresar el precio del producto').bail()
    .isNumeric().withMessage('El precio debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio no puede ser menor a 10000'),
    
    body('price')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio no puede ser menor a 10000')
];

const validateEditProduct = [
    body('name')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    body('description')
    .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),
    
    body('size')
    .notEmpty().withMessage('Debes ingresar el talle del producto').bail()
    .isNumeric().withMessage('El talle debe ser ingresado en números'),

    body('category')
    .isAlpha().withMessage('La categoría sólo debe contener letras').bail()
    .isLength({ min: 4 }).withMessage('El nombre de la categoría debe tener al menos 4 caracteres'),

    body('oldPrice')
    .isNumeric().withMessage('El precio debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio no puede ser menor a 10000'),
    
    body('price')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .isLength({ min: 5 }).withMessage('El precio no puede ser menor a 10000')
];

module.exports = validateRegister; 
module.exports = validateLogin;
module.exports = validateCreateProduct; 
module.exports = validateEditProduct;
