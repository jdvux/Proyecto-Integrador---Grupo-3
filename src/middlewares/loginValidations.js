const { body } = require('express-validator');

const loginValidations = [
    body("emailLogin")
        .isEmail().withMessage("Debes ingresar tu correo electrónico").bail(),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
];

module.exports = loginValidations;