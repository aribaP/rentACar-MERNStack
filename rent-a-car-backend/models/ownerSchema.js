const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSch = new Schema({
    ownerName: {
        type: String,
        required: true
    },
    ownerCNIC: {
        type: String,
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
    address: {
        type: String,
        required: true
    },
    ActiveStatus: {
        type: Boolean,
        default: false
    }    
}, {timestamps: true} )


// CarOwner : Starts from captial letter
// OWNER : Name of the document
// ownerSch : Schema name
const CarOwner = mongoose.model('CAROWNER', ownerSch);
module.exports = CarOwner;