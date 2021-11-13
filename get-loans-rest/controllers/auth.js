const { request, response, json } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req = request, res = response) => {
    
    const { name, lastName, email, password } = req.body;

    try {        
        // Verify email
        const user = await User.findOne({ email });

        if ( user ) {
            return res.status(400).json({
                msg: 'Already existing email'
            });
        }

        // Create user model
        const dbUser = new User( req.body );

        // Hash password
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt );

        // Generate JWT
        const token = await generateJWT( dbUser.id, name );

        // Create DB user
        await dbUser.save();

        // Generate successful response
        return res.status(201).json({
            uid: dbUser.id,
            name,
            lastName,
            email,
            token
        });

    } catch ( error ) {
        return res.status(500).json({
            msg: 'Please talk to the admin'
        });
    }
}

const loginUser = async(req = request, res = respose) => {

    const { email, password } = req.body;

    try {
        
        const dbUser = await User.findOne({ email });

        if ( !dbUser ) {
            return res.status(400).json({
                msg: 'Invalid email or password'
            });
        }

        const validPassword = bcrypt.compareSync( password, dbUser.password );

        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Invalid email or password'
            });
        }

        const token = await generateJWT( dbUser.id, dbUser.name );

        return res.json({
            uid: dbUser.id,
            name: dbUser.name,
            lastName: dbUser.lastName,
            token
        });

    } catch ( error ) {
        console.log( error );        
        return res.status(500).json({
            msg: 'Please talk to the admin'
        });
    }


}

const renewToken = async( req = request, res = response ) => {

    const { uid, name } = req;

    const token = await generateJWT( uid, name );

    return res.json({
        uid,
        name,
        token
    });

}

module.exports = {
    createUser,
    loginUser,
    renewToken
}
