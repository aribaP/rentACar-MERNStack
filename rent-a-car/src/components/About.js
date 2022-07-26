import './About.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

function About() {
  return (
    <body>
          
      <link  href="/css/main.min.css" rel="stylesheet"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
      <section id="about">
      <div className='container'>

         <div className='row'>
            <div className='col-md-6 col'>
                <div className='about-content'>
                <h3 class="card-subtitle mb-2">About Us</h3>
                <p>
                We have come a long way, so we know exactly which direction to take when supplying you with high quality yet budget-friendly products. We offer all of this while providing excellent customer service and friendly support.
                  We always keep an eye on the latest trends in rental services and put our customers wishes first. That is why we have satisfied customers all over the world, and are thrilled to be a part of this industry.
                  The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.
                  </p>    
            </div>
            </div>
            <div className='col-md-6 col'>
            <div className=''> 
              <img src={require("./images/aboutus.jpg")}></img>    
            </div>
            </div>
        </div>
      </div>
    </section>

           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 
    </body>

  );
}

export default About;
