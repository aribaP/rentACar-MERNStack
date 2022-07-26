import './Services.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

function Services() {
  return (
    <body>
          
      <link  href="/css/main.min.css" rel="stylesheet"/>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
           

    <section id="services">
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 ser-pro'>
                <h2>Services we provide</h2> 
                <p> We care about you</p>
            </div>
        </div>
         <div className='row'>
            <div className='col-md-6'>
                <div className='cars'> 
                <h3 class="card-subtitle mb-2"> If you register your car</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, excepturi sint autem exercitationem placeat a doloribus, voluptate assumenda magnam, consequatur dicta neque numquam modi quos libero beatae quisquam corporis accusamus.</p>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='cars'> 
                <h3 class="card-subtitle mb-2"> If you register your car</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, excepturi sint autem exercitationem placeat a doloribus, voluptate assumenda magnam, consequatur dicta neque numquam modi quos libero beatae quisquam corporis accusamus.</p>
            </div>
            </div>
        </div>
      </div>
    </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
 
    </body>

  );
}

export default Services;
