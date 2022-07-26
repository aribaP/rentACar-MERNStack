import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { Modal } from 'bootstrap';
import './Post.css';

const Amount = (props) => { 
    
    console.log(props.duration);
    const {btype, duration, setmount } = props;
    const [amount, setAmount] = useState();

    const postData = async()=>{
        
        console.log("Here2");
        console.log(props.btype);
        try{
          await axios.post("http://localhost:5000/posting",[btype])
        
          .then((response) => {
            console.log("Data recieved");   
            console.log(response.data);
            const results = response.data;
            var ans = Object.values(JSON.parse(JSON.stringify(results)));
            console.log("Anse" , ans[2]);
            setAmount(ans[2]);
            
        })
          
        
      }catch(err){
          console.log(err);
      }
  };
  console.log(props.duration);
    
  useEffect(() => {
          
    postData();
    
  });

     return (
      
      <body>
            <div className='bg-black pt-1 pb-1 text-white'>
                 <h2>
                    {amount * props.duration}
                    {/* {props.btype}
                    {props.duration} */}
                  </h2>
            </div>
      </body>
    );

}

export default Amount;