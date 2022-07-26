import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";

import './custsignup.css';

const Signup = () => {
  const history = useHistory();
  const initialvalues = {
    custName: "",
    custCNIC: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name; //name attribute after input
    value = e.target.value; //the value entered by the user
    setFormValues({ ...formValues, [name]: value }); //...=>spread operator
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //To avoid default page reload
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const postData = async (formValues) => {
    const { custName, custCNIC, phoneNumber, address, email, password } =
      formValues;

    const res = await fetch("/custsignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        custName,
        custCNIC,
        phoneNumber,
        address,
        email,
        password,
      }),
    });


    const data = await res.json();
    console.log(res.status);
    // data = Object.values(JSON.parse(JSON.stringify(data)));
   

    if ( res.status==422 && data.error === 'email' ) {
      console.log('HEYYY');
      window.alert("Email already exists.");
      console.log("Incorrect credentials");
      history.push("/custSignup");
    } else if (res.status==422 && data.error === 'custCNIC') {
      window.alert("This CNIC is already registered.");
      console.log("Incorrect credentials");
      history.push("/custSignup");
    } else  {
      window.alert("Valid Registration");
      console.log("Valid Registration");
      history.push("/custLogin");
    }
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit === true) {
      postData(formValues);
      // console.log(formValues); //Rectified values after validation
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexphoneno = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
    const regexCNIC = /^[0-9]{5}-[0-9]{7}-[0-9]$/gm;

    if (!values.custName) {
      errors.custName = "Username is required!";
    }
    if (!values.custCNIC) {
      errors.custCNIC = "CNIC is required!";
    } else if (!regexCNIC.test(values.custCNIC)) {
      errors.custCNIC = "CNIC must follow the XXXXX-XXXXXXX-X format!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phonenumber is required!";
    } else if (!regexphoneno.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phonenumber!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.email) {
      errors.email = "Email address is required!";
    } else if (!regexemail.test(values.email)) {
      errors.email = "Invalid email-address!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters!";
    }
    return errors;
  };
  return (
    <>
      <div className="create-account"></div>
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src={require("./images/signuplogo.png")} alt="" />
            <h3>Welcome</h3>
            <p>We want to connect with you!</p>
            <Link to="/custLogin" class="btn m-5 btn-light btn-lg ">
              Login
            </Link>
            <br />
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <form method="post">
                  <div class="row register-form">
                    <div class="col-md-6">
                      <label for="custName" class="form-label" required>
                        First Name
                      </label>
                      <div class="form-group">
                        <input
                          type="text"
                          name="custName"
                          class="form-control"
                          placeholder="First Name *"
                          id="custName"
                          value={formValues.custName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formErrors text-danger">
                        <p className="ErrMessage">{formErrors.custName}</p>
                      </div>
                      <label for="custCNIC" class="form-label">
                        CNIC
                      </label>
                      <div class="form-group">
                        <input
                          type="text"
                          name="custCNIC"
                          class="form-control"
                          placeholder="XXXXX-XXXXXXX-X *"
                          id="custCNIC"
                          value={formValues.custCNIC}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formErrors text-danger">
                        <p className="ErrMessage">{formErrors.custCNIC}</p>
                      </div>

                      <div class="form-group">
                        <label for="phoneNumber" class="form-label">
                          Phone Number
                        </label>
                        <input
                          type="integer"
                          name="phoneNumber"
                          class="form-control"
                          id="phoneNumber"
                          placeholder="00000000000 *"
                          value={formValues.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formErrors text-danger">
                        <p className="ErrMessage">{formErrors.phoneNumber}</p>
                      </div>

                      <div class="form-group">
                        <label for="address" class="form-label">
                          {" "}
                          Permanent Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          class="form-control"
                          placeholder="Address *"
                          id="address"
                          value={formValues.address}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formErrors text-danger">
                        <p className="ErrMessage">{formErrors.address}</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="abc@example.com *"
                          value={formValues.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formErrors text-danger">
                        <p className="ErrMessage">{formErrors.email}</p>
                      </div>
                      <div class="form-group">
                        <label for="password" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          placeholder="Atleast 8 characters *"
                          autocomplete="new-password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="formErrors text-danger">
                        <p className="ErrMessage">{formErrors.password}</p>
                      </div>
                      <input
                        type="submit"
                        class="btnRegister"
                        value="Register"
                        onClick={handleSubmit}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
