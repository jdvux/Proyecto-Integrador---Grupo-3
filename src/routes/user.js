const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validateLogin = require('../middlewares/express-validator');
const validateRegister = require('../middlewares/express-validator');
const uploadUserImages = require('../middlewares/multer');


router.get('/login', usersController.loginView);
router.post('/login/:id', validateLogin, usersController.processLogin);

router.get('/register', usersController.registerView);
router.post('/register/:id', validateRegister, usersController.processRegister);

router.get('/profile/:id', usersController.profileView);
router.put('/profile/id', uploadUserImages, usersController.profileChanges);

module.exports = router;