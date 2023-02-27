const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validations = require('../middlewares/express-validator');
const upload = require('../middlewares/multer');


router.get('/login', usersController.loginView);
router.post('/login/:id', validations, usersController.processLogin);

router.get('/register', usersController.registerView);
router.post('/register/:id', validations, usersController.processRegister);

router.get('/profile/:id', usersController.profileView);
router.put('/profile/id', upload, usersController.profileChanges);

module.exports = router;