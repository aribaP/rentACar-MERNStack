const mongoose = require('mongoose');

const DB = process.env.DATABASE;

var mongooseConnection = mongoose.connect(DB,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then((result) => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Connection failed",err));

module.exports = mongooseConnection;