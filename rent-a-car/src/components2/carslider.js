import React from 'react'
import { Carousel } from 'react-bootstrap';
import './carslider.css';



function Images(){
    let imageInfo=[
    {

        source:require('./images/carbg1.jpg'),
        // title:'FIND YOUR BEST CAR RENTAL WITH AVIS'
    },
    {

        source:require('./images/carbg2.jpg'),
        // title:'FIND YOUR BEST CAR RENTAL WITH AVIS'
    },
    {

        source:require('./images/carbg3.jpg'),
        // title:'FIND YOUR BEST CAR RENTAL WITH AVIS'
    }
   ]
    return (
    <>
    <div>
        <Carousel>
            {imageInfo.map(e =>(
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={e.source}
                    height="700"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
    </>
  )
}
export default Images