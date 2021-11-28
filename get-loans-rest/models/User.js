const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String,
        emun: ['Male', 'Female']
    },
    maritalStatus: {
        type: String,
        emun: ['Married', 'Widowed', 'Separated', 'Divorced', 'Single']
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model( 'User', UserSchema );
