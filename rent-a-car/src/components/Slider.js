import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

function Slider() {
  return (
    <body>
          
      <link  href="/css/main.min.css" rel="stylesheet"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 

      <section id="slider" class="bg-light pt-5">
        <div className="container-fluid">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={require("./images/firstSlider.jpg")} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <div className="bg-blacl">
                            <h5>Ensuring your car's safety is our first priority</h5>
                            <p> We encounter an increase in the number of car registrations on daily basis. </p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={require("./images/secondSlider.jpg")}class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <div className="bg-black">
                            <h5>Most relaible brand in the history of car services</h5>
                            <p> You can lease car of your choice anytime for any number of days. Enjoy Riding!</p>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={require("./images/thirdSlider.png")} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <div className="bg-black">
                            <h5>Credentials are always confidential</h5>
                            <p>Either it is you or your car, 100 percent security and privary is achieved by documentation.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
     
           
      </section>

           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 
    </body>

  );
}

export default Slider;
