const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = ( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'Error in token'
        });
    }

    try {
        
        const { uid, name } = jwt.verify( token, process.env.SECRET_JWT_SEED );
        req.uid = uid;
        req.name = name;

    } catch ( error ) {
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }

    next();
}

module.exports = {
    validateJWT
}
