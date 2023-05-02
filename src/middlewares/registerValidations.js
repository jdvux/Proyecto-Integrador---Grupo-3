const { body } = require('express-validator');
const { User } = require('../database/models');

const registerValidations = [
    body("nameRegister")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres").bail()
        .isAlpha().withMessage("El nombre sólo puede contener letras"),
    
    body("lastNameRegister")
        .isLength({ min: 2 }).withMessage("El apellido debe tener al menos dos caracteres").bail()
        .isAlpha().withMessage("El apellido sólo puede contener letras"),

    body("emailRegister")
        .notEmpty().withMessage("Debes escribir tu correo electrónico").bail()
        .isEmail().withMessage("El del correo formato debe ser correo@correo.xxx").bail()
        .custom(async value => {
            const user = await User.findOne({
                where: {
                    email: value
                }
            });
            if (user) {
                throw new Error('El email indicado ya se encuentra en uso')
            }
        }),

    body("passwordRegister")
        .isLength({ min: 8 }).withMessage("La contraseña debe contener al menos 8 caracteres").bail()
        .isAlphanumeric().withMessage("La contraseña debe contener al menos una letra y un número")
];

module.exports = registerValidations;