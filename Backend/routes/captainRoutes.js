const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const captainController = require('../controllers/captainController')
const auth = require('../middlewares/authMiddleware');
router.post('/register', [
  // fullname.firstname
  body('fullname.firstname')
    .trim()
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),

  // fullname.lastname (optional but if present, validate)
  body('fullname.lastname')
    .optional()
    .trim()
    .isLength({ min: 3 }).withMessage('Last name must be at least 3 characters'),

  // email
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email format'),

  // password
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  // vehicle.color
  body('vehicle.color')
    .trim()
    .notEmpty().withMessage('Vehicle color is required')
    .isLength({ min: 3 }).withMessage('Color must be at least 3 characters'),

  // vehicle.plate
  body('vehicle.plate')
    .trim()
    .notEmpty().withMessage('Vehicle plate is required')
    .isLength({ min: 3 }).withMessage('Plate must be at least 3 characters'),

  // vehicle.capacity
  body('vehicle.capacity')
    .notEmpty().withMessage('Vehicle capacity is required')
    .isInt({ min: 1 }).withMessage('Capacity must be at least 1'),

  // vehicle.vehicleType
  body('vehicle.vehicleType')
    .notEmpty().withMessage('Vehicle type is required')
    .isIn(['car', 'motorcycle', 'auto'])
    .withMessage('Vehicle type must be car, motorcycle, or auto'),

  // location.lat (optional)
  body('location.lat')
    .optional()
    .isFloat().withMessage('Latitude must be a number'),

  // location.lng (optional)
  body('location.lng')
    .optional()
    .isFloat().withMessage('Longitude must be a number'),
], captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 character long'),
], captainController.loginCaptain);


router.get('/profile', auth.authCaptain, captainController.getCaptainProfile);
router.get('/logout', auth.authCaptain, captainController.logoutCaptain);
module.exports = router;