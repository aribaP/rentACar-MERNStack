import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";
import './login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    console.log("Here");
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log(res);
    
    const data = await res.status;
    // data = Object.values(JSON.parse(JSON.stringify(data)));
    console.log(data);
    if (data == 422) {
      window.alert("Email already exists.");
      console.log("Incorrect credentials");
      history.push("/register");
    } else {
      window.alert("Login Successful");
      console.log("Login Succcesful");
      history.push("/post");
    }
  };
  return (
    <>
      <div class="container register-form w-100">
        <div class="form-login">
          <div class="note">
            <p className="TitleLogin">Login to proceed</p>
          </div>

          <div class="form-content">
            <div class="row">
              <label for="email" className="col-sm-4 col-form-label">
                Email-Address
              </label>
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="someone@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <label for="password" className="col-sm-4 col-form-label">
                Password
              </label>
              <div class="col-lg-6">
                <div class="form-group">
                  <input
                    autoComplete="disabled"
                    type="password"
                    id="password"
                    class="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
            <button type="button" class="btnSubmit" onClick={handleClick}>
              Submit
            </button>    
            </div>
            
            <div className="LinkSignUp">
             <Link to="/create" className="mt-1 text-black">
                Click here to signup
            </Link>   
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
