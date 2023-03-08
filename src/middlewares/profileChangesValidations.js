const { body } = require('express-validator');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const profileChangesValidations = [
    body("userName")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos dos caracteres").bail()
        .isAlpha().withMessage("El nombre sólo puede contener letras"),
    
    body("userLastName")
        .isLength({ min: 2 }).withMessage("El apellido debe tener al menos dos caracteres").bail()
        .isAlpha().withMessage("El apellido sólo puede contener letras"),

    body("userEmail")
        .notEmpty().withMessage("Debes escribir tu correo electrónico").bail()
        .isEmail().withMessage("El del correo formato debe ser correo@correo.xxx")
        .custom((userEmail, {req}) => {
            let user = req.session.userLogged
            users.forEach(element => {
                if (userEmail == element.email && userEmail !== user.email) {
                    throw new Error('Este correo electrónico ya se encuentra en uso');
                }
                });
            }),

    body("userPassword")
        .isLength({ min: 8 }).withMessage("La contraseña debe contener al menos 8 caracteres").bail()
        .isAlphanumeric().withMessage("La contraseña debe contener al menos una letra y un número")
];

module.exports = profileChangesValidations;