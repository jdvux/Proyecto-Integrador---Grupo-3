const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const registerValidations = require('../middlewares/registerValidations');
const loginValidations = require('../middlewares/loginValidations');
const usersController = require('../controllers/usersController');

router.get('/register', usersController.registerView);
router.post('/register/', registerValidations, usersController.processRegister);

router.get('/login', usersController.loginView);
router.post('/login/:id', loginValidations, usersController.processLogin);

router.get('/profile/:id', usersController.profileView);
router.put('/profile/id', upload, usersController.profileChanges);

module.exports = router;