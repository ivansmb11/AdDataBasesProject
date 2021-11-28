const User = require('../models/User');

const existEmail = async ( email = '' ) => {
    
    const existEmail = await User.findOne({ email });
    
    if ( existEmail ) {
        throw new Error(`Email '${ email }' already registered`)
    }

}

const existUserById = async ( id = '' ) => {
    
    const existEmail = await User.findById( id );
    
    if ( !existEmail ) {
        throw new Error(`Id '${ id }' do not exist`)
    }

}

module.exports = {
    existEmail,
    existUserById
}
