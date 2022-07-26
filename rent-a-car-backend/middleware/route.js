const express = require('express');
const router = express.Router();
const multer = require('multer');


const CarOwner = require('../models/ownerSchema');
const Customer = require('../models/custPrsnlSchema');
const Car = require('../models/carSchema');
const CustCarDetail = require('../models/custCarDetSchema');
const BodyType = require('../models/bodyTypeSchema');
const { identity } = require('lodash');
const { type } = require('express/lib/response');

let emailOwner, passwordOwner;

router.get('/',(req,res)=>{
    res.send("Hi there.")
});

router.post('/register', async (req,res)=>{

    // async await
    
    const { ownerName, ownerCNIC, email, password, phoneNumber, address } = req.body;
    if(!ownerName || !ownerCNIC || !email || !password || !phoneNumber || !address )
    {
        return res.status(422).json({error: "422"});
    }

    try{
        const ownCheck = await CarOwner.findOne({email : email});                     // Owner is const variable assigned as ownerScheme
        const custCheck = await Customer.findOne({email : email});
        const ownCNICcheck = await Car.findOne({ownerCNIC : ownerCNIC});
        const custCNICcheck = await Customer.findOne({custCNIC : ownerCNIC});
        if(ownCheck || custCheck)
            return res.status(422).json({error: "email"});
        if(ownCNICcheck || custCNICcheck)
            return res.status(422).json({error: "cnic"});
        
        const user = new CarOwner({ownerName, ownerCNIC, email, password, phoneNumber, address });
        await user.save();
        emailOwner = email;
        passwordOwner = password;
        res.status(201).json({messege: "200"});
    } catch(err){
        console.log(err);
    }

});

router.post('/login', async (req, res) =>{
    try{
        const {email, password} = req.body;
        if(!email || !password)
            return res.status(400).json({error: "400"});
        
        const ownCheck = await CarOwner.findOne({ email : email, password : password});
        console.log(ownCheck);
        if(!ownCheck)
            res.status(401).json({error: "401"});
        else if(ownCheck)
        {
            res.status(200).json({messege : "200"});
            emailOwner = email;
            passwordOwner = password;
        }
            
    }
    catch(err){
        console.log(err);
    }

});

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,'C:/Users/Ariba/Documents/Ariba/FAST/6th Semester/SE Software Engineering/Project/rent-a-car/src/components');
    }, 
    filename: (req, file, callback) => {
        callback(null, './imageDestination/' + Date.now() + '-' + file.originalname);
    }
})

const upload = multer({storage: storage});

router.post('/carpost', upload.single("carImage"), async (req,res)=>{
    // if(!emailOwner || !passwordOwner)
    // {
    //     res.status(401).json({error : "Please login to continue"});
    // }

    console.log("Reg.body:",req.body);
    let carImage = req.file.filename;

    const numPlateCheck = await Car.findOne({ NumberPlate : req.body.NumberPlate});
    if(numPlateCheck)
    {
        return res.status(422).json({error: "numberplate"});
    }
    try{
        const car = new Car({
            email : emailOwner,
            NumberPlate: req.body.NumberPlate,
            modelName : req.body.modelName,
            makeName : req.body.makeName,
            manufacturingYear : req.body.manufacturingYear,
            carImage : carImage,
            bodytype: req.body.bodytype,
            AC: req.body.AC, 
            Tech: req.body.Tech,
            TransmissionAuto: req.body.TransmissionAuto,
            Fuel: req.body.Fuel, 
            EngineCapacity: req.body.EngineCapacity,
            IssueDate: req.body.IssueDate,
            ReturnDate: req.body.ReturnDate
            //amount missing
            
        });
        await car.save();
        res.status(200).json({messege: "200"});
    } catch(err){
        console.log(err);
    }
     

});

router.get('/displayownercar', async (req, res) => {
    console.log("here");
    if(!emailOwner || !passwordOwner)
    {
        res.status(401).json({error : "Please login to continue"});
    }

    const carData = await Car.find({email : emailOwner});
    console.log(carData);
    res.send(carData);
});

// router.get('/posting', async (req, res) => {
//     const {type} = req.body;
//     console.log(type);
//     console.log("here");
//     const bodyTypeData = await BodyType.find({Type : type});
// });

router.post('/posting', async (req, res) => {
    const Type = req.body;
    console.log('res',req.body);
    console.log("typ",Type[0]);
    console.log("here");
    const bodyTypeData = await BodyType.findOne({Type : Type[0]});
    console.log(bodyTypeData);
    res.send(bodyTypeData);
});











// CUSTOMER


router.get("/", (req, res) => {
    res.send("HELLO FROM ROUTER SERVER");
  });
  
  /* IF YOU WANT USER TO ENTER DATA IN A FORM,AND THE INFO TO BE STORED IN DATABASE, THEN USE POST (POST ON DATABASE)*/
  //Using Async Await
  router.post("/custsignup", async (req, res) => {
    const { custName, custCNIC, email, password, phoneNumber, address } =
      req.body;
    if (
      !custName ||
      !custCNIC ||
      !phoneNumber ||
      !address ||
      !email ||
      !password
    ) {
      console.log("Please fill all the fields.");
      return res.status(422).json({ err: "Please fill all the fields." });
    }
    try {
      const custEmailCheck = await Customer.findOne({ email: email }); //If the email already exists.
      const custCNICCheck = await Customer.findOne({ custCNIC : custCNIC }); //If the email already exists.
      if (custEmailCheck ) {
        console.log("The email-address is already taken.");
        return res.status(422).json({ error: 'email' });
      }
      if (custCNICCheck) {
        console.log("The CNIC is already taken.");
        return res.status(422).json({ error: 'custCNIC' });
      }
  
      const customer = new Customer({
        custName,
        custCNIC,
        email,
        password,
        phoneNumber,
        address,
      });
  
      const customerRegistered = await customer.save();
      console.log(customerRegistered);
      if (customerRegistered) {
        console.log("Customer registered successfully");
        res.status(201).json({ message: "Customer registered successfully" });s
      }
    } catch (err) {
      console.log(err);
    }
  });
  
  router.post("/custlogin", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) return res.status(400).json({ error: "400" });
  
      const userLogin = await Customer.findOne({
        email: email,
        password: password,
      });
      console.log(userLogin);
      if (!userLogin) res.status(401).json({ error: "401" });
      else if (userLogin) res.status(200).json({ messege: "200" });
    } catch (err) {
      console.log(err);
    }
  });
  
let ID,RD;
router.get("/custCarlist/:ID/:RD", async (req, res) => {
    ID = req.params["ID"];
    RD = req.params["RD"];
    console.log(req.params["ID"]);
    console.log(req.params["RD"]);
    try {
      if (!ID || !RD) {
        console.log('All the required fields not filled.')
        return res.status(400).json("All the required fields not filled.");
      }
      if (RD <= ID) {
        console.log('Return Date is lesser than Issue Date ')
        return res.status(422).json("Renter input dates;");
      }
      if (ID <= new Date() || RD <= new Date()) {
        console.log('Date is lesser than Issue Date.')
        return res.status(422).json("Renter input dates;");
      } else {
        // console.log(ID, RD);
      }
      res.status(200).json({ messege: "200" });
    } catch (err) {
      console.log(err);
    }
  });
  
  
router.get('/custdisplayCarList',async(req,res)=>{  
    const custcarDetails = await Car.aggregate([
      [
        {
          '$lookup': {
            'from': 'bodytypes', 
            'localField': 'bodytype', 
            'foreignField': 'Type', 
            'as': 'CT1'
          }
        }, {
          '$match': {
            '$and': [
              {
                'IssueDate': {
                  '$lt': new Date(ID)
                }
              }, {
                'ReturnDate': {
                  '$gt': new Date(RD)
                }
              }
            ]
          }
        }, {
          '$unwind': {
            'path': '$CT1'
          }
        }, {
          '$project': {
            'NumberPlate': 1.0, 
            'modelName': 1.0, 
            'makeName': 1.0, 
            'EngineCapacity': 1.0, 
            'bodytype': 1.0, 
            'manufacturingYear': 1.0, 
            'CT1.Amount': 1.0
          }
        }
      ]
      
   ] )
   if(custcarDetails.length > 0){
        console.log(custcarDetails);
        var date1 = new Date(RD)
        var date2 = new Date(ID)
        var Diff = date1.getTime() - date2.getTime();
        var differentDays = Math.ceil(Diff/ (1000 * 3600 * 24));
        const amt_cust={};
            for(i=0;i<custcarDetails.length;i++){
            amt_cust[i]=((custcarDetails[i].CT1.Amount)* (2) * (differentDays));
            amt_cust[i] = {amount:amt_cust[i]};
            obj = Object.assign({}, amt_cust[i]);
            console.log("Amount to be paid:",amt_cust[i]);
    }
  res.json({custcarDetails:custcarDetails,amt_cust:amt_cust,ID:ID,RD:RD})
  // res.send(custcarDetails)
    
  }else{
    res.status(200).json({ messege: "No cars found." });
  }
  });
        
  router.get("/enterCustCarDet", async (req, res) => {
   
  });

module.exports = router;