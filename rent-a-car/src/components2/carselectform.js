import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { format } from "date-fns";
import { Link, useHistory } from "react-router-dom";
import './carselectform.css';

const Carselectform = () => {
  const history = useHistory();
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [allEntry, setAllEntry] = useState([]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      postData(date1, date2);
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault(); //To avoid default page reload
    const newEntry = { toDate: date1, fromDate: date2 };
    setAllEntry([...allEntry, newEntry]);
    // console.log(allEntry);
    setFormErrors(validate(date1, date2));
    setIsSubmit(true);
  };

  const postData = async (date1, date2) => {
    const newEntry = { toDate: date1, fromDate: date2 };

    console.log("Here");
    let result2 = await fetch(`http://localhost:5000/custCarlist/${date1}/${date2}`) //GET FETECH API
    result2 = await result2.json();
    console.log(result2.status);
    // let data = Object.values(JSON.parse(JSON.stringify(data)));
    if (result2.status === 400) {
      window.alert("Please fill all the input fields");
      console.log("Incomplete entries");
      history.push("/custcarselectform");
    } else if (result2.status === 422) {
      window.alert("Input Dates are not correct");
      console.log("Incorrect credentials");
      history.push("/custcarselectform");
    } else {
      console.log('Sucessful');
      window.alert("Login successful");
      console.log('Me')
      history.push( "/custcardisplay");
    }
  };

  const validate = (date1, date2) => {
    const errors = {};

    if (date1 === undefined) {
      errors.toDate = "Pickup date is required!";
      console.log("Pickup date is required!", date1);
    } else if (date1 <= format(new Date(), "yyyy-MM-dd")) {
      // console.log((date1,"<=",format(new Date(),'yyyy-MM-dd')))
      errors.toDate = "Pickup date should be ahead of current date.";
      console.log("Invalid pickup date.");
    } else {
      // console.log('GREAT!')
    }
    if (date2 === undefined) {
      errors.fromDate = "Drop-Off date is required!";
      console.log("Drop-Off date is required!", date2);
    } else if (date2 <= format(new Date(), "yyyy-MM-dd")) {
      // console.log((date2,"<=",format(new Date(),'yyyy-MM-dd')))
      errors.fromDate = "Drop-Off should be ahead of current date.";
      console.log("Invalid Drop-Off date.");
    } else {
      // console.log('WELLDONE!')
    }
    if (date2 <= date1) {
      errors.fromDate = "* Re-enter the correct pickup and drop-off dates.";
    }
    return errors;
  };
  return (
    <>
      <div class="bookcontainer">
        <div class="book">
          <div class="description">
            <h1>
              <strong>Book</strong> YOUR CAR
            </h1>
            <div class="quote">
              <p>
                This improves everyone’s quality of life, including people who
                can’t own cars or don’t have access to the vehicles they need.
                Our connected car technology allows guests to book a wide
                variety of vehicles directly from our app without ever having to
                meet anyone in person, carry an access card, wait in line, or
                coordinate picking up keys.
              </p>
            </div>
            <ul>
              <li>Super reliable service</li>
              <li>24/7 customer service</li>
              <li>GPS tracking and help</li>
              <li>Baby Chairs/Booster Seats</li>
            </ul>
          </div>
          <div class="form">
            <form>
              <h5>PICK-UP DATE</h5>
              <div class="inpbox">
                <input
                  type="date"
                  name="toDate"
                  id="toDate"
                  value={date1}
                  onChange={(e) => setDate1(e.target.value)}
                />
              </div>
              <div className="formErrors text-danger">
                <p className="ErrMessage">{formErrors.toDate}</p>
              </div>

              <h5>DROP-OFF DATE</h5>
              <div class="inpbox">
                <input
                  type="date"
                  name="fromDate"
                  id="fromDate"
                  value={date2}
                  onChange={(e) => setDate2(e.target.value)}
                />
              </div>
              <div className="formErrors text-danger">
                <p className="ErrMessage">{formErrors.fromDate}</p>
              </div>

              <button class="subt bg-danger" onClick={handleSubmit}>
                Find A Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carselectform;
