const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    // "Access-Control-Allow-Origin" : "*"
}));

// Database configuration 
dotenv.config({path: './config/configure.env'});
const  mongooseConnection = require('./config/dbconfig');

// Routing through router - middleware
app.use(require('./middleware/route'));
app.use('/middleware', express.static('public'));
// Schemas
const CarOwner = require('./models/ownerSchema');
const Customer = require('./models/custPrsnlSchema');
const Car = require('./models/carSchema');
const CustCarDetail = require('./models/custCarDetSchema');
const BodyType = require('./models/bodyTypeSchema');

// Server listening
const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log('Server listening at port', PORT);
})


// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

