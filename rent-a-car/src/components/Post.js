import './Post.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { Modal } from 'bootstrap';
import Amount from './AmountOwner';

const PostCarForm = () => {   
    const history = useHistory();                    // yaha per react hai. ek
    const initialvalues = {
        modelName:"",
        makeName:"",
        NumberPlate:"",
        manufacturingYear:"",
        carImage:"",
        NumberPlate:"",
        bodytype:"",
        AC:"",
        Tech:"",
        TransmissionAuto:"",
        Fuel:"",
        EngineCapacity:"",
        IssueDate:"",
        ReturnDate:""
    };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // const [view, setView] = useState(false);
    const [duration, setDuration] = useState();
    const [btype, setbodytype] = useState();
    const [rd, setReturnDate] = useState();
    const [id, setIssueDate] = useState();

    let name, value;
    const handleChange = (e) => {
      name = e.target.name; //name attribute after input
      value = e.target.value; //the value entered by the user
      setFormValues({ ...formValues, [name]: value }); //...=>spread operator

      var inputIssuesDate = document. getElementById("dropdate"). value;
        var dateEntered = new Date(inputIssuesDate);
        console.log(dateEntered);
        console.log(dateEntered.getDate());
        console.log(dateEntered.getMonth());
        console.log(dateEntered.getFullYear());
        
    };
    const handleChangeCarImage = (e) =>{
        
        setFormValues({ ...formValues,carImage: e.target.files[0]});
    }
  
    const handleSubmit = (e) => {
        e.preventDefault(); //To avoid default page reload
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

  
    const handleView = (e) => {
        setFormErrors(validate(formValues));
        // setView(true);
        setbodytype(formValues.bodytype);
        console.log(btype);
        setIssueDate(formValues.IssueDate);
        setReturnDate(formValues.ReturnDate);
        console.log(rd, id);

        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        var inputIssueDate = document. getElementById("dropdate").value;
        var dateEnteredID = new Date(inputIssueDate);
        var inputReturnDate = document. getElementById("returndate"). value;
        var dateEnteredRD = new Date(inputReturnDate);
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(dateEnteredRD.getFullYear(), dateEnteredRD.getMonth(), dateEnteredRD.getDate());
        const utc2 = Date.UTC(dateEnteredID.getFullYear(), dateEnteredID.getMonth(), dateEnteredID.getDate());

        let d = Math.floor((utc1 - utc2) / _MS_PER_DAY);
        setDuration(d);
    };
   
   
    const postData = async()=>{
       
        const formdata = new FormData();
        formdata.append('carImage',formValues.carImage);
        formdata.append('NumberPlate',formValues.NumberPlate);
        formdata.append('modelName',formValues.modelName);
        formdata.append('makeName',formValues.makeName);
        formdata.append('manufacturingYear',formValues.manufacturingYear);
        formdata.append('bodytype',formValues.bodytype);
        formdata.append('AC',formValues.AC);
        formdata.append('Tech',formValues.Tech);
        formdata.append('TransmissionAuto',formValues.TransmissionAuto);
        formdata.append('Fuel',formValues.Fuel);
        formdata.append('EngineCapacity',formValues.EngineCapacity);
        formdata.append('IssueDate',formValues.IssueDate);
        formdata.append('ReturnDate',formValues.ReturnDate);
        
        try{
            await axios.post("http://localhost:5000/carpost",formdata)
            .then((response) => {
                console.log("Data recieved");   
                console.log(response.data);
                const results = response.data;
                var ans = Object.values(JSON.parse(JSON.stringify(results)));
                console.log("Anse" , ans[2]);
                window.alert("Succesfull");
                history.push("/");
            })
            
        }catch(err){
            console.log(err);
            // window.alert("Something Went Wrong")
            // window.alert("The number plate is already registered");
        }

    };
  
    useEffect(() => {                      // yeh use state aur useeffect ka concept thora ajeebsa hai props aur hooks. Iske aage abhi tak zarorat nh parhi
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit === true) {
            
            postData(formValues);
            console.log(formValues); //Rectified values after validation
      }
    },[postData]);
  
    const validate = (values) => {
        const errors = {};
        const regexNumberPlate = /^[A-Z]{3,4}-[0-9]{3,4}$/gm;

        if (!regexNumberPlate.test(values.NumberPlate)) 
            errors.NumberPlate = "Number plate must follow XXX-000 or XXXX-0000 or XXX-0000 or XXXX-000 format!";

        if(!values.makeName)
            errors.makeName = "Fill in the value";

        if(!values.modelName)
            errors.modelName = "Fill in the value";

        if(!values.AC)
            errors.AC = "Fill chooose one of the options";

        if(!values.Tech)
            errors.Tech = "Fill chooose one of the options";

        if(!values.TransmissionAuto)
            errors.TransmissionAuto = "Fill chooose one of the options";

        if(!values.bodytype)
            errors.bodytype = "Fill chooose one of the options";

        if(values.Fuel < 0 )
            errors.Fuel = "Fuel Capacity can not be in negative";
        else if(!values.Fuel)
            errors.Fuel = "Fill in the value";

        if(values.manufacturingYear < 1980 || values.manufacturingYear > 2022)
            errors.manufacturingYear = "Input correct model year";
        else if(!values.manufacturingYear)
            errors.manufacturingYear = "Fill in the value";

        if(values.EngineCapacity < 0 )
            errors.Fuel = "Engine Capacity can not be in negative";
        else if(!values.EngineCapacity)
            errors.EngineCapacity = "Fill in the value";



            var inputIssueDate = document. getElementById("dropdate"). value;
            var dateEnteredID = new Date(inputIssueDate);
            const IDM = dateEnteredID.getMonth();
            const IDY = dateEnteredID.getFullYear();
            const IDD = dateEnteredID.getDate();

            var inputReturnDate = document. getElementById("returndate"). value;
            var dateEnteredRD = new Date(inputReturnDate);
            const RDM = dateEnteredRD.getMonth();
            const RDY = dateEnteredRD.getFullYear();
            const RDD = dateEnteredRD.getDate();


            const dateEnteredD = new Date();
            console.log(dateEnteredD);
            let DY = dateEnteredD.getFullYear();
            let DD = dateEnteredD.getDate();
            let DM = dateEnteredD.getMonth();
            console.log(DM);
            console.log(DY);
            console.log(DD);
            

        if(!IDM)
            errors.IssueDate = "Pick the drop off date";
        else if((IDD <= DD && IDM <= DM && IDY <= DY) || (IDD > DD && IDM < DM && IDY <= DY))
            errors.IssueDate = "Pick an authentic drop off date";

        if(!RDM)
            errors.ReturnDate = "Pick the return date";
        else if((RDD <= IDD && RDM <= IDM && RDY <= IDY) || (RDD >= IDD && RDM < IDM && RDY <= IDY) || (RDD <= DD && RDM <= DM && RDY <= DY) )
            errors.ReturnDate = "Pick an authentic drop off date";
        
        
        
        return errors;
    };
    return (                          // is return ke neeche html hai poori
        <body>

            <section id= "post-car-form">
                <div className="create-account">
                    <div className="form-bg container">
                        <div className="container-fluid row">

                            <div className="row justify-content-center pt-5">
                                <div className="col-4 text">
                                    <div className="advantages">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card mt-2">
                                                <div className="card-body">
                                                        <h5 className="card-title text-danger">Earn Earn Earn!</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted">Lease your car to earn maximum without working hard.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row">
                                                <div className="col">
                                                    <div className="card mt-2">
                                                        <div className="card-body">
                                                            <h5 className="card-title text-danger"> "Relaible Brand" </h5>
                                                            <h6 className="card-subtitle mb-2 text-muted">We assure the safety of your car and important credentials.</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="card mt-2">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-danger"> Enjoy Holidays! </h5>
                                                        <h6 className="card-subtitle mb-2 text-muted"> Tour the world, while having an opportunityto earn with spending.</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="card mt-2">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-danger">Easy Procedure</h5>
                                                        <h6 className="card-subtitle mb-2 text-muted"> Click below to find the easy way of earning at home</h6>
                                                            <a className='text-danger opacity-50' href="#procedure">LEARN MORE</a>  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-7 customform">
                                    <form className="form-post-css">

                                        <div className="row justify-content-center mt-2 pt-2">
                                            <div className="col-5">
                                                <input type="text" name="modelName" className="form-control" id="modelname" placeholder='Model Name' required
                                                    value={formValues.modelName}
                                                    onChange={handleChange}/>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.modelName}</p>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <input type="text" name="makeName" className="form-control " id="makename" placeholder='Make Name' required
                                                    value={formValues.makeName}
                                                    onChange={handleChange}/>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.makeName}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center mt-2 pt-2">
                                            <div className="col-5">
                                                <input type="text" name="NumberPlate"className="form-control " id="numberplate" placeholder='Number Plate' required
                                                    value={formValues.NumberPlate}
                                                    onChange={handleChange}/>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.NumberPlate}</p>
                                                </div>
                                            </div>
                                            
                                            <div className=" col-5">
                                                <input type="number" name="manufacturingYear" className="form-control" id="year" placeholder='Manufacturing Year' required
                                                    value={formValues.manufacturingYear}
                                                    onChange={handleChange}/>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.manufacturingYear}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row justify-content-center mt-2 pt-2">
                                            <div className=" col-5">
                                                <input type="number" name="Fuel" className="form-control" id="fuel" placeholder='Fuel' required
                                                    value={formValues.Fuel}
                                                    onChange={handleChange}/>
                                                    <div className="formErrors text-danger">
                                                        <p>{formErrors.Fuel}</p>
                                                    </div>
                                            </div>
                                            
                                            <div className="col-5">
                                                <input type="number" name="EngineCapacity" className="form-control" id="EngineCapacity" placeholder='Engine Capacity'required
                                                    value={formValues.EngineCapacity}
                                                    onChange={handleChange}/>
                                                    <div className="formErrors text-danger">
                                                        <p>{formErrors.EngineCapacity}</p>
                                                    </div>
                                            </div>
                                            
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className=" col-5">
                                                <label for="AC" className="form-label">Air Condition</label>
                                                <select name="AC" className="form-control" id="AC" aria-placeholder="Choose" 
                                                value={formValues.AC}
                                                onChange={handleChange}>
                                                    <option name="AC" disabled > </option>
                                                    <option name="AC" > Yes </option>
                                                    <option name="AC"> No </option>
                                                </select>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.AC}</p>
                                                </div>
                                            </div>
                                            <div className=" col-5">
                                                <label for="Tech" className="form-label">Wireless Technology</label>
                                                <select name="Tech" className="form-control" id="Tech" aria-plTecheholder="Choose" required
                                                    value={formValues.Tech}
                                                    onChange={handleChange}>  
                                                    <option name="Tech" disabled> </option>
                                                    <option name="Tech"> Yes </option>
                                                    <option name="Tech"> No </option>
                                                </select>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.Tech}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="row justify-content-center mt-2 pt-2">
                                            <div className=" col-5">
                                            <label for="bodytype" className="form-label"> Body Type</label>
                                                <select name="bodytype" className="form-control" id="BodyType" aria-placeholder="Choose" required
                                                    value={formValues.bodytype}
                                                    onChange={handleChange}>
                                                    <option name="bodytype" disabled>  </option>
                                                    <option name="bodytype"> Sedan </option>
                                                    <option name="bodytype"> HatchBack </option>
                                                    <option name="bodytype"> MUV/SUV </option>
                                                    <option name="bodytype"> Convertible </option>
                                                    <option name="bodytype"> Station Wagon </option>
                                                    <option name="bodytype"> MiniVan/Van </option>
                                                    <option name="bodytype"> Jeep </option>
                                                    <option name="bodytype"> Coupe </option>     
                                                    <option name="bodytype"> Sports Car </option>
                                                    <option name="bodytype"> Pickup Truck </option>
                                                    <option name="bodytype"> Crossovers </option>
                                                    <option name="bodytype"> MPV </option>
                                                    <option name="bodytype"> Microcars </option>
                                                    <option name="bodytype"> Limousines </option>
                                                </select>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.bodytype}</p>
                                                </div>
                                            </div>
                                            <div className=" col-5">
                                                <label for="TransmissionAuto" className="form-label">Transmission Type</label>
                                                <select name="TransmissionAuto" className="form-control" id="Transmission" aria-placeholder="Choose" required
                                                    value={formValues.TransmissionAuto}
                                                    onChange={handleChange}>
                                                    <option name="TransmissionAuto" disabled>  </option>
                                                    <option name="TransmissionAuto"> Automatic </option>
                                                    <option name="TransmissionAuto"> Manual </option>
                                                </select>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.TransmissionAuto}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row pb-2 justify-content-center mt-2 pt-2">
                                            <div className=" col-5">
                                                <label for="dropdate" className="form-label">Drop off date</label>
                                                <input type="date" name="IssueDate"className="form-control " id="dropdate" required
                                                    value={formValues.IssueDate}
                                                    onChange={handleChange}/>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.IssueDate}</p>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <label for="returndate" className="form-label">Return date</label>
                                                <input type="date" name="ReturnDate"className="form-control " id="returndate" required
                                                    value={formValues.ReturnDate}
                                                    onChange={handleChange}/>
                                                <div className="formErrors text-danger">
                                                    <p>{formErrors.ReturnDate}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row pb-2 justify-content-center mt-2 pt-2">
                                            <div className="col-5">
                                                    <label htmlFor="file"> Upload Car Image</label>
                                                    <input type="file" name="carImage" className="form-control"     
                                                        onChange={handleChangeCarImage}/>

                                                    <span className="input-group-append">
                                                        <button className="file-upload-browse btn btn-gradient-primary" type="button" ></button>
                                                    </span>
                                            </div>
                                        </div>

                                        <div className="row pb-2 justify-content-center mt-2 pt-2">
                                            <div className="col-5">   
                                            <a href="#display-amount" aria-current="page" button type='button' className="btn btn-dark" onClick={handleView}>
                                                View Amount 
                                            </a>
                                            
                                               
                                            </div>
                                            
                                        </div>              
                                    </form>

                                </div>
                            </div>
                            <section id="display-amount">
                            <div id="display-amount" className="amount-show">
                                <div className="container mb-5 pb-5">
                                    <div className="amount-show border-rounded ">
                                        <div className="card text-center ">
                                            <div className="card-body bg-black border-rounded ">
                                                <h4 className="card-title text-muted">
                                                    Review the amount before you hit the submit button!
                                                </h4>
                                                <h6 className="card-text mb-2 text-grey">
                                                    Calculated amount according to your car description is following.
                                                </h6>
                                                
                                                <h2 className="card-text text-danger border p-2 text-center">
                                                    | Calculated Amount | 
                                                    {<Amount  btype = {btype} duration = {duration} Amount = {Amount}/>}
                                                </h2>

                                                <h6 className="card-text mb-2 text-muted"> 
                                                    If you agree to the amount, click on "Submit Details" to successfully register your car.
                                                </h6>
                                                <div className="p-2 pt-4">
                                                    <button type="submit" className="btn btn-md btn-danger" onClick={handleSubmit}>
                                                                Submit Details
                                                    </button> 
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
           
            
        </body>    
    );
}
 
export default PostCarForm;

// <p> Calculated Amount : </p>
// {<Amount  btype = {btype} duration = {duration} Amount = {Amount}/>}