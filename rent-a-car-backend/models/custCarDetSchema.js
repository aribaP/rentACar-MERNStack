const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const custCarDetSch = new Schema({
    email: {
        type: String,
        required: true
    },
    plateNum: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    IssueDate: {
        type: Date,
        required: true
    },
    ReturnDate: {
        type: Date,
        required: true
    }
}, {timestamps: true} )


const CustCarD = mongoose.model('CUSTOMERCARDETAILS', custCarDetSch);
module.exports = CustCarD;