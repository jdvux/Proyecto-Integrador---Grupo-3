const { body } = require('express-validator');

const loginValidations = [
    body("passwordLogin")
        .isEmail().withMessage("Debes ingresar tu correo electrónico").bail(),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
];

module.exports = loginValidations;