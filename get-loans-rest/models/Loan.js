const { Schema, model } = require('mongoose');

const LoanSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
        type: Number 
    },
    employmentYears: {
        type: Number,
        default: 0
    }
});

module.exports = model( 'Loan', LoanSchema );
