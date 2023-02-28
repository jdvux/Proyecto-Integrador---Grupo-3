const { body } = require('express-validator');

const registerValidations = [
    body("nameRegister")
        .isAlpha().withMessage("El nombre sólo puede contener letras").bail()
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres"),
    
    body("lastNameRegister")
        .isAlpha().withMessage("El apellido sólo puede contener letras").bail()
        .isLength({ min: 2 }).withMessage("El apellido debe tener al menos dos caracteres"),

    body("emailRegister")
        .notEmpty().withMessage("Debes escribir tu correo electrónico").bail()
        .isEmail().withMessage("El del correo formato debe ser correo@correo.xxx"),

    body("passwordRegister")
        .isLength({ min: 8 }).withMessage("La contraseña debe contener al menos 8 caracteres").bail()
        .isAlphanumeric().withMessage("La contraseña debe contener al menos una letra y un número")
];

module.exports = registerValidations;