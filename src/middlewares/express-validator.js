const { body, check } = require('express-validator');

const validateRegister = [
    check('name')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    check('last-name')
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos dos caracteres'),

    check('email')
    .notEmpty().withMessage('Debes escribir tu correo electrónico').bail()
    .isEmail().withMessage('El formato debe ser correo@correo.com'),

    check ('password')
    .isLength({ min: 8 }).withMessage('Debe contener al menos 8 caracteres').bail()
    .isAlphanumeric().withMessage('Debe contener al menos una letra y un número'),

    check('terms-conditions')
];

const validateLogin = [
    check('username')
    .notEmpty().withMessage('Debes ingresar tu nombre de usuario').bail(),

    check('password')
    .notEmpty().withMessage('Debes ingresar tu contraseña').bail()
];

const validateCreateProduct = [
    check('name')
    .isLength({ min: 8 }).withMessage('El nombre debe tener al menos 8 caracteres'),
    
    check('description')
    .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),

    check('upload-product')
    .notEmpty().withMessage('Debes subir al menos una imagen para el producto').bail(),

    check('size')
    .notEmpty().withMessage('Debes ingresar el talle del producto').bail()
    .isNumeric().withMessage('El talle debe ser ingresado en números'),

    check('category')
    .isLength({ min: 4 }).withMessage('Debes ingresar al menos 4 caracteres').bail()
    .isAlpha().withMessage('La categoría sólo debe contener letras'),

    check('oldPrice')
    .notEmpty().withMessage('Debes ingresar el precio del producto').bail()
    .isNumeric().withMessage('El precio debe estar expresado en números'),
    
    body('price')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .custom(price => {
        if (req.body.price > req.body.OldPrice) {
            return ('El precio en descuento no puede ser mayor al precio original');
         }
    }),
];

const validateEditProduct = [
    check('name')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),

    check('description')
    .isLength({ min: 50 }).withMessage('La descripción debe tener al menos 50 caracteres'),
    
    check('size')
    .notEmpty().withMessage('Debes ingresar el talle del producto').bail()
    .isNumeric().withMessage('El talle debe ser ingresado en números'),

    check('category')
    .isLength({ min: 4 }).withMessage('Debes ingresar al menos 4 caracteres').bail()
    .isAlpha().withMessage('La categoría sólo debe contener letras'),

    check('oldPrice')
    .notEmpty().withMessage('Debes ingresar el precio del producto').bail()
    .isNumeric().withMessage('El precio debe estar expresado en números'),
    
    body('price')
    .isNumeric().withMessage('El precio en descuento debe estar expresado en números').bail()
    .custom(price => {
        if (req.body.price > req.body.OldPrice) {
            return ('El precio en descuento no puede ser mayor al precio original');
         }
    }),
];

module.exports = validateRegister, validateLogin, validateCreateProduct, validateEditProduct;
