const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSch = new Schema({
    email:{
        type: String,
        required: false
    },
    NumberPlate: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    makeName: {
        type: String,
        retuired: true
    },
    manufacturingYear: {
        type: Number,
        required: true
    },
    ActiveStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    carImage: {
        type: String,
        required: false
    },
    NumberPlate: {
        type: String,
        required: false
    },
    bodytype: {
        type: String,
        required: false
    },
    AC: {
        type: String,
        retuired: false
    },
    Tech: {
        type: String,
        required: false
    },
    TransmissionAuto: {
        type: String,
        required: false
    },
    Fuel:{
        type: Number,
        required: false
    },
    EngineCapacity: {
        type: Number,
        required: false
    },
    Amount: {
        type: Number,
        required: false
    },
    IssueDate: {
        type: Date,
        required: false
    },
    ReturnDate: {
        type: Date,
        required: false
    }

}, {timestamps: true} )


// Customer : Starts from captial letter
// CUSTOMERPERSONALDETAILS : Name of the document
// custPrsnlSch : Schema name
const Car = mongoose.model('CAR', CarSch);
module.exports = Car;