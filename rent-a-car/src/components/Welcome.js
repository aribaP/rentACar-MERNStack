import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

function Welcome() {
  return (
    <body>
          
      <link  href="/css/main.min.css" rel="stylesheet"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 

      <section id="welcome" class="pt-5 bg-light">
        <div class="container-lg py-5">
          <div class="row g-4 justify-content-center align-items-center">
            <div class="col-md-5 text-md-start">
              <h1>
                <div class="display-4 bg-gradient-danger">Welcome Riders!</div>
                <div class="lead fs-3 border-start">Your experience matters to us.</div>
              </h1>
              <p class="lead fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos odio accusantium suscipit quibusdam repudiandae, nemo at veritatis, non magnam doloribus quas sit adipisci modi? Aut excepturi numquam corporis sequi.</p>

              <a href="#navbar" class="d-block mt-3 btn btn-danger px-3" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">Book a car</a>
              <a href="#sidebar" class="d-block mt-3 btn btn-danger px-3" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">Register your car</a>
             
              
            </div>
            <div class="col-md-5 text-center">
              <img src={require("./images/redcar.png")} class="img-fluid max-width: 100%"/>
            </div>
          </div>
        </div>
 
      </section>

      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="sidebar" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
          <div class="container-fluid justify content center">
            <h5 class="offcanvas-title" id="sidebar-label">Login to proceed</h5>
             <Link to="/create" class="d-block mt-3 btn btn-light border-danger">Create account</Link>
             <Link to="/login" class="d-block mt-3 btn btn-light border-danger">Login</Link> 
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>
      </div>
      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="navbar" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
          <div class="container-fluid justify content center">
            <h5 class="offcanvas-title" id="sidebar-label">Login to proceed</h5>
             <Link to="/custSignup" class="d-block mt-3 btn btn-light border-danger">Create account</Link>
             <Link to="/custLogin" class="d-block mt-3 btn btn-light border-danger">Login</Link> 
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 
    </body>

  );
}

export default Welcome;
