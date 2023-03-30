const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const registerValidations = [
    body("nameRegister")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres").bail()
        .isAlpha().withMessage("El nombre sólo puede contener letras"),
    
    body("lastNameRegister")
        .isLength({ min: 2 }).withMessage("El apellido debe tener al menos dos caracteres").bail()
        .isAlpha().withMessage("El apellido sólo puede contener letras"),

    body("emailRegister")
        .notEmpty().withMessage("Debes escribir tu correo electrónico").bail()
        .isEmail().withMessage("El del correo formato debe ser correo@correo.xxx")
        .custom((value, { req }) => {
            let found = users.find(user => user.email == req.body.emailRegister);
            if (found && found !== undefined) {
                throw new Error("Ese correo electrónico ya se encuentra en uso");
            }
            return true;
        }),

    body("passwordRegister")
        .isLength({ min: 8 }).withMessage("La contraseña debe contener al menos 8 caracteres").bail()
        .isAlphanumeric().withMessage("La contraseña debe contener al menos una letra y un número")
];

module.exports = registerValidations;