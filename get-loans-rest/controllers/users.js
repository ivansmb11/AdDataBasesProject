const { request, response } = require('express');
const User = require('../models/User');

const getUsers = async( req = request, res = response ) => {

    const { limit = 5, skip = 0 } = req.query;

    const query = { active: true };

    const [ total, users ] = await Promise.all([
        User.countDocuments( query ),
        User.find( query )
            .skip(Number( skip ))
            .limit(Number( limit ))
    ])

    res.json({
        total,
        users
    });

}

const updateUser = async( req = request, res = response ) => {

    const { id } = req.params;
    const { _id, password, email, ...rest } = req.body;
    
    if ( password ) {        
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password, salt );
    }

    const user = await User.findByIdAndUpdate( id, rest );

    res.json({ user });

}

const deleteUser = async ( req, res = response ) => {
    
    const { id } = req.params;

    const user = await User.findByIdAndUpdate( id, { active: false } );
 
    res.json({
        user
    });

}

module.exports = {
    deleteUser,
    getUsers,
    updateUser
}
