const express = require ('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const rules = require('../middlewares/express-validator');
const upload = require('../middlewares/multer');


router.get('/login', usersController.loginView);
router.post('/login/:id', rules, usersController.processLogin);

router.get('/register', usersController.registerView);
router.post('/register/:id', rules, usersController.processRegister);

router.get('/profile/:id', usersController.profileView);
router.put('/profile/id', upload, usersController.profileChanges);

module.exports = router;