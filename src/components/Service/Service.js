import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const {id,name,img,price} = service;


  return (
    <div className="service">
      <img src={img} alt="" />
      <h5>{name}</h5>
      <p>Price: ${price}</p>
      <button className="btn btn-primary">Order</button>
    </div>
  );
};

export default Service;