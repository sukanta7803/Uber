const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const userController = require('../controllers/userControllers')
const auth = require('../middlewares/authMiddleware');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 character long'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 character long'),
], userController.registerUser
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 character long'),
], userController.loginUser);


router.get('/profile', auth.authUser, userController.getUserProfile);
router.get('/logout', auth.authUser, userController.logoutUser);
module.exports = router;