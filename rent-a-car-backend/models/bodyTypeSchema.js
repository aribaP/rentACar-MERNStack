const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BodyTypeSch = new Schema({
    Type: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    }
}, {timestamps: true} )


// CarOwner : Starts from captial letter
// OWNER : Name of the document
// custCarDetSch : Schema name
const BodyT = mongoose.model('BODYTYPE', BodyTypeSch);
module.exports = BodyT;