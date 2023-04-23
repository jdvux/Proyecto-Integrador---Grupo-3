const { body } = require('express-validator');
const bcryptjs = require('bcryptjs');

const loginValidations = [
    body("emailLogin")
        .notEmpty().withMessage("Debes ingresar tu correo electrónico").bail()
        .isEmail().withMessage("El formato debe ser correo@correo.com").bail(),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
];

module.exports = loginValidations;