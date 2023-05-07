const { body } = require('express-validator');
const bcryptjs = require('bcryptjs');
const { User } = require('../database/models');

const loginValidations = [
    body("emailLogin")
        .notEmpty().withMessage("Debes ingresar tu correo electrónico").bail()
        .isEmail().withMessage("El formato debe ser correo@correo.com").bail()
        .custom(async value => {
            const user = await User.findOne({
                where: {
                    email: value
                }
            });
            if (!user) {
                throw new Error('El email no se encuentra registrado')
            };
        }),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
        .custom(async (value, {req}) => {
            const user = await User.findOne({
                where: {
                    email: req.body.emailLogin
                }
            });

            if (user && !bcryptjs.compareSync(req.body.passwordLogin, user.password)) {
                throw new Error('La contraseña no es correcta');
            }; 
        })
];

module.exports = loginValidations;