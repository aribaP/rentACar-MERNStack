import React ,{useState}from "react";
import './navbar.css';

const Navbar = () => {
    const[show,setShow]=useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
          <div className="container">
            <a className="navbar-brand" to="#">
            
              <div className="fs-5 text-light">
              <img src={require("./images/frontpage.jpg")} alt="" width="30" height="24" className="pe-2"></img>
                <b>Rent A Car</b>
              </div>
              
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>setShow(!show)}>
            
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show?"show":" "}`} >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#welcome">
                    <div className="fs-4 text-light"> Home </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                  <div className="fs-4 text-light"> Services </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                  <div className="fs-4 text-light"> About Us </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faqs">
                  <div className="fs-4 text-light"> FAQs </div>
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex">
                <button className="btn  btn-style" type="submit">
                  Log In
                </button>
                <button className="btn  btn-style" type="submit">
                  Sign Up
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
