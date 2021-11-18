const { Router } = require('express');
const { check } = require('express-validator');

const { deleteUser, getUsers, updateUser } = require('../controllers/users');
const { existUserById } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get( '/', getUsers );

router.put( '/:id', [
    check('id', 'Not a valid id').isMongoId(),
    check('id').custom( existUserById ),
    validateFields
], updateUser );

router.delete( '/:id', [
    validateJWT,
    check('id', 'Not a valid id').isMongoId(),
    check('id').custom( existUserById ),
    validateFields
], deleteUser );

module.exports = router;
