const express = require ('express');
const { body } = require('express-validator');
const router = express.Router();
const usersController = require('../controllers/usersController');
const reigsterValidations = require('../middlewares/express-validator');
const loginValidations = require('../middlewares/express-validator');
const upload = require('../middlewares/multer');


router.get('/login', usersController.loginView);
router.post('/login/:id', usersController.processLogin);

router.get('/register', usersController.registerView);
router.post('/register/:id', reigsterValidations, usersController.processRegister);

router.get('/profile/:id', usersController.profileView);
router.put('/profile/id', upload, loginValidations, usersController.profileChanges);

module.exports = router;