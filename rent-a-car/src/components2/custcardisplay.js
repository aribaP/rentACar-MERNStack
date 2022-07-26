import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import './custcardisplay.css'

const Custcardisplay = () => {
  const history = useHistory();
  const [carData, setcarData] = useState({});
  const [carAmt, setcarAmt] = useState({});
  const [issueDate, setIssueDate] = useState({});
  const [returnDate, setReturnDate] = useState({});
  const [differentDays, setdifferentDays] = useState({});
  const [nocarData, nosetcarData] = useState(false);
  const handleSubmit = (e) => {
   
  };
  useEffect(() => {
    const getCarData = async () => {
      console.log("Here1");
      const res = await fetch(`http://localhost:5000/custdisplayCarList`); //GET FETECH API
      const getdata = await res.json();
      const ID = JSON.stringify(getdata.ID);
      const RD = JSON.stringify(getdata.RD);
      const carD = getdata.custcarDetails;
      const carAmt = getdata.amt_cust;
      console.log(Object.values(carD));
      console.log(Object.values(carAmt));
      console.log(ID);
      console.log(RD);
      var date1 = new Date(RD);
      var date2 = new Date(ID);
      var Diff = date1.getTime() - date2.getTime();
      console.log(Diff);
      var differentDays = Math.ceil(Diff / (1000 * 3600 * 24));
      console.log(differentDays);

      if (getdata) {
        console.log("Set here");
        setcarData(carD);
        setcarAmt(carAmt);
        setIssueDate(issueDate);
        setReturnDate(returnDate);
        setdifferentDays(differentDays);
      } else {
        console.log("no car");
        nosetcarData(true);
      }
    };
    getCarData();
  }, []);
  return (
    <>
      <body>
        {Object.values(carData).map((e) => (
          <div className="carDisplayCard">
            <div className="container_card">
              <div className="row m-0">
                <div className="col-8">
                  <div className="row">
                    <div className="carImage col-12 p-5">
                      <img
                        src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-upcoming-new-honda-cars-india-new-honda-3.png"
                        alt=""
                      />
                    </div>
                    <div class="row m-0 bg-light">
                      <div class="col-md-6 ps-30 pe-0 my-4">
                        <p className="para" class="text-mute fontsize-14">
                          Body Type
                        </p>
                        <p className="para" class="heading5 m-0 fw-bold">
                          {e.bodytype}
                        </p>
                      </div>

                      <div class="col-6 ps-30 my-4">
                        <p className="para" class="text-mute fontsize-14">
                          ModelName
                        </p>
                        <p className="para" class="heading5 m-0 fw-bold">
                          {e.modelName}
                        </p>
                      </div>
                      <div class="col-6 ps-30 my-4">
                        <p className="para" class="text-mute fontsize-14">
                          ManufacturingYear
                        </p>
                        <p className="para" class="heading5 m-0 fw-bold">
                          {e.manufacturingYear}
                        </p>
                      </div>
                      <div class="col-6 ps-30 my-4">
                        <p className="para" class="text-mute fontsize-14">
                          Fuel
                        </p>
                        <p className="para" class="heading5 m-0 fw-bold">
                          {e.Fuel} MPGe
                        </p>
                      </div>
                      <div class="col-6 s-30 my-4">
                        <p className="para" class="text-mute fontsize-14">
                          Engine Capacity
                        </p>
                        <p className="para" class="heading5 m-0 fw-bold">
                          {e.EngineCapacity} CC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div class="col-lg p-0 ps-lg-4">
                  <div class="row m-0">
                    <div class="col-8 px-4">
                      <div class="d-flex align-items-end mt-4 mb-2">
                        <p className="para" class="heading4 m-0 fontsize-22">
                          <span class="pe-1"></span>
                        </p>
                      </div>

                      <div class="d-flex justify-content-between mb-2">
                        <p className="para" class="textmuted">
                          Subtotal
                        </p>
                        <p className="para" class="fontsize-14 fw-bold">
                          <span class="fas fa-dollar-sign pe-1"></span>
                          {e.CT1.Amount * 2 * differentDays}
                        </p>
                      </div>
                    </div>
                    <div class="col-9 px-0">
                      <div class="row bg-light m-0">
                        <div class="col-12 px-4 my-4">
                          <p class="fw-bold">PICKUP DETAILS </p>
                        </div>
                        <div class="col-12 px-4">
                          <div class="d-flex  mb-4">
                            <span class="me-5">
                              <h6>
                                <strong>Note: </strong> Please pick the car on
                                the selected pickup date.
                                <br />
                                <br />
                                <strong>Pickup Location: </strong>Rent A Car,
                                Shah Saleem Rd, Faisal Town Block 10 Liaquatabad
                                Town, Karachi, Karachi City, Sindh 75900
                              </h6>
                            </span>
                          </div>
                        </div>
                      </div>

                      <button type="button" class="btn btn-dark btn-lg btn-block" onClick={handleSubmit}>Rent Now</button>
               
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </body>
    </>
  );
};

export default Custcardisplay;
