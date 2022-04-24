const router = require('express').Router();
const userController = require('../Controllers/user.controller');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.post('/logout', userController.logout);

router.use('/portfolio', userController.authMiddleware); //will add one more parameter

exports.Router = router;