const express = require('express');
const router = express.Router();
const uploadUsers = require('../middlewares/multerUsers');
const registerValidations = require('../middlewares/registerValidations');
const loginValidations = require('../middlewares/loginValidations');
const profileChangesValidations = require('../middlewares/profileChangesValidations');
const usersController = require('../controllers/usersController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/register', authMiddleware, usersController.registerView);
router.post('/register', registerValidations, usersController.processRegister);

router.get('/login', authMiddleware, usersController.loginView);
router.post('/login', loginValidations, usersController.processLogin);

router.get('/logout', usersController.processLogout);

router.get('/profile', guestMiddleware, usersController.profileView);
router.put('/profile', uploadUsers.single('userImage'), profileChangesValidations, usersController.profileChanges);

module.exports = router;