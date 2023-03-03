const { body } = require('express-validator');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const loginValidations = [
    body("emailLogin")
        .notEmpty().withMessage("Debes ingresar tu correo electrónico").bail()
        .isEmail().withMessage("El formato debe ser correo@correo.com"),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
];

module.exports = loginValidations;