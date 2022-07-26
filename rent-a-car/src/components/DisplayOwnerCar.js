import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';


const DisplayOwnerCar = () => {

    const history = useHistory();
    const [carData, setcarData] = useState({});
    const [carURL, setCarURL] = useState('./imageDestination/no-image.png');

    const getCarData = () => {
        console.log("Here1");
        axios.get('http://localhost:5000/displayownercar')
        
        .then((response) => {
            console.log("Data recieved");   
            setcarData(response.data[0]);
            
            console.log(carURL);
     
           
        })
        .catch((err) => { 
            console.log("Here Error",err);
        })
        return;
    }
    
    useEffect(() => {
        
        getCarData();
        
    }, []);
   

    return (
        <body>      
            <link  href="/css/main.min.css" rel="stylesheet"/>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            {/* <section id=""> */}
                <div className="container-lg container">
                    <form method="GET">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-img-top">
                                    <img src={require(`${carData.carImage}`)} className="img-fluid max-width: 100%"/>

                                   
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Model and make name {carData.modelName} {carData.makeName}</h4>
                                        <h6 className="date-style">Issue date and return {carData.ReturnDate} {carData.IssueDate}</h6>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Number Plate | {carData.NumberPlate} </li>
                                            <li className="list-group-item">Bodytype | {carData.bodytype}</li>
                                            <li className="list-group-item">Manufacturing Year |{carData.manufacturingYear}</li>
                                            <li className="list-group-item">Fuel | {carData.Fuel} </li>
                                            <li className="list-group-item">Engine Capacity | {carData.EngineCapacity} </li>
                                            <li className="list-group-item">Transmission type | {carData.TransmissionAuto} </li>
                                            <li className="list-group-item">AC | {carData.AC} </li>
                                            <li className="list-group-item">Wireless Tech | {carData.Tech}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            {/* </section> */}
        </body>
    );
}
 
export default DisplayOwnerCar;