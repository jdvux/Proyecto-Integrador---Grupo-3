const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validateLogin = require('../middlewares/express-validator');
const validateRegister = require('../middlewares/express-validator');


router.get('/login', usersController.loginView);
router.post('/login', validateLogin, usersController.processLogin);

router.get('/register', usersController.registerView);
router.post('/register', validateRegister, usersController.processRegister);

router.get('/profile', usersController.profileView);

module.exports = router;