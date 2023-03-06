const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const registerValidations = require('../middlewares/registerValidations');
const loginValidations = require('../middlewares/loginValidations');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/register', authMiddleware, usersController.registerView);
router.post('/register', registerValidations, usersController.processRegister);

router.get('/login', authMiddleware, usersController.loginView);
router.post('/login', loginValidations, usersController.processLogin);

router.get('/logout', authMiddleware, usersController.processLogout);

router.get('/profile', guestMiddleware, usersController.profileView);
router.put('/profile', upload, usersController.profileChanges);

module.exports = router;