const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const custPrsnlSch = new Schema({
    custName: {
        type: String,
        required: true
    },
    custCNIC: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        retuired: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    ActiveStatus: {
        type: Boolean,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {timestamps: true} )


// Customer : Starts from captial letter
// CUSTOMERPERSONALDETAILS : Name of the document
// custPrsnlSch : Schema name
const Customer = mongoose.model('CUSTOMERPERSONALDETAILS', custPrsnlSch);
module.exports = Customer;