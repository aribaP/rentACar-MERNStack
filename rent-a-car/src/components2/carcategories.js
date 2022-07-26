import React from 'react'
import { Card } from 'react-bootstrap';
import './carcategories.css';

const Bookingsteps = () => {
  let imageInfo=[
    {

        source:require('./images/sedan.png'),
        title:"SEDAN",
        text:"Daihatsu Mira or similar"
    },
    {

        source:require('./images/cabriolet.png'),
        title:"CONVERTIBLE",
        text:"Toyota Corolla or similar"
    },
    {

        source:require('./images/suv.png'),
        title:"SUV",
        text:"Land Cruiser or similar"
    },
    {

      source:require('./images/minivan.png'),
      title:"MINIVAN",
      text:"Toyota Coaster or similar"
    },
    {

      source:require('./images/coupe.png'),
      title:"COUPE",
      text:"Honda CR-Z sports or similar"
    }
   ]
  return (
    <>
    <div className='Cartypes'>
        <div class="des">
          <h2><strong>POPULAR CAR CATEGORIES</strong> </h2>
        </div> 
        <div className='row' >
          {imageInfo.map(e =>(
          <Card style={{ width: '19rem' }}>
          <Card.Img variant="top" src={e.source} />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>{e.text}</Card.Text>
          </Card.Body>
          </Card>          
          ))}
          </div>  
    </div>
    
    </>
  )
}

export default Bookingsteps;