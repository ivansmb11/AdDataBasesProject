const { Router } = require('express');
const { check } = require('express-validator');

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// Create new user
router.post( '/create', [
    check('email', 'Email is mandatory').isEmail(),
    check('name', 'Name is mandatory').not().isEmpty(),
    check('password', 'Password must be 6 characters minimum').isLength({ min: 6 }),
    validateFields
], createUser );

// Login user
router.post( '/', [
    check('email', 'Email is mandatory').isEmail(),
    check('password', 'Password must be 6 characters minimum').isLength({ min: 6 }),
    validateFields
], loginUser );

// Validate and revalidate token
router.get( '/renew', validateJWT, renewToken );

module.exports = router;
