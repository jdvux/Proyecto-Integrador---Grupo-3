const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { body } = require('express-validator');
const upload = require('../middlewares/multer');

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

const loginValidations = [
    body("passwordLogin")
        .isEmail().withMessage("Debes ingresar tu correo electrónico").bail(),

    body("passwordLogin")
        .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
];

router.get('/login', usersController.loginView);
router.post('/login/:id', usersController.processLogin);

router.get('/register', usersController.registerView);
router.post('/register/:id', registerValidations, usersController.processRegister);

router.get('/profile/:id', usersController.profileView);
router.put('/profile/id', upload, loginValidations, usersController.profileChanges);

module.exports = router;