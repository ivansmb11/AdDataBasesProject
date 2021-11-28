const { Router } = require('express');
const { check } = require('express-validator');
const { createLoan, getLoans } = require('../controllers/loans');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post( '/', [
    check('monthlyIncome', 'Monthly income is required').not().isEmpty(),
    validateJWT,
    validateFields
], createLoan );

router.get( '/', [
    validateJWT
], getLoans );

module.exports = router;
