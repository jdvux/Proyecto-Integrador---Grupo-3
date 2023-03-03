const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');

const loginValidations = [
    body("emailLogin")
        .notEmpty().withMessage("Debes ingresar tu correo electrónico").bail()
        .isEmail().withMessage("El formato debe ser correo@correo.com").bail()
        .custom((value, { req }) => {
            let user = users.find(user => user.email == req.body.emailLogin);
            if (user == undefined) { throw new Error('Email no se encuentra registrado') };
            return true;
    }),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
        .custom((value, { req }) => {
            let encryptedPassword;
            let user = users.find(user => user.email == req.body.emailLogin);
            if (user == undefined) { throw new Error('Regístrate primero') } else { encryptedPassword = user.password };
            let comparePasswords = bcryptjs.compareSync(req.body.passwordLogin, encryptedPassword);
            if (!comparePasswords) { throw new Error('Contraseña incorrecta') }
            return true; 
        })
];

module.exports = loginValidations;