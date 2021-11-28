const { request, response } = require('express');
const Loan = require('../models/Loan');

const createLoan = async( req = request, res = response ) => {

    const { user, ...body } = req.body;

    const data = {
        ...body,
        user: req.uid
    };

    const loan = new Loan( data );
    await loan.save();
    res.status(201).json( loan );

}

const getLoans = async( req = request, res = response ) => {

    const loans = await Loan.find({ user: req.uid });
    res.json({ loans });

}

module.exports = {
    createLoan,
    getLoans
}
