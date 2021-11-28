const { Schema, model } = require('mongoose');

const LoanSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    dependents: {
        type: Number,
        default: 0
    },
    monthlyIncome: {
        type: Number,
        required: true
    },
    coApplicantIncome: {
        type: Number,
        required: true,
    },
    history: {
        type: Number,
        default: 0
    },
    propertyType: {
        type: String,
        default: 'Urban'
    },
    amountRequested: {
        type: Number,
        required: true
    },
    employmentYears: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        emun: ['Accepted', 'Pending', 'Declined'],
        default: 'Pending'
    }
});

module.exports = model( 'Loan', LoanSchema );
