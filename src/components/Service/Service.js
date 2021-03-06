import React from 'react';
import { Link } from "react-router-dom";

import './Service.css'

const Service = ({ service }) => {
    const { id,name, img, price, description } = service;
   
   
   


  return (
    <div className="service">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <Link to={"/checkout/" + id}>
        <button className="btn"> Online Booking</button>
      </Link>
    </div>
  );
};

export default Service;