import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    const navigate = useNavigate();

    const[user] = useAuthState(auth)
   
   const handleButtonNavigate = () =>{
     if(user){
       navigate('/checkout')
     }
     else{
       navigate('/login')
     }
   }
     


  return (
    <div className="service">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn" onClick={handleButtonNavigate}>
        Click here
      </button>
    </div>
  );
};

export default Service;