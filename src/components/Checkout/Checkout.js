import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import './Checkout.css'


const Checkout = () => {
    const { checkoutId } = useParams();
    const [email, setEmail] =useState('')
    const [address, setAddress] =useState('')
    const [phone, setPhone] =useState('')
    const [submit, setSubmit] =useState('')


    const handleEmail = event =>{
        setEmail(event.target.value);
    }

    const handleAddress = event =>{
        setAddress(event.target.value);
    }

    const handlePhone = event =>{
        setPhone(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setSubmit(email, address, phone, submit);
        
            if(submit){
                toast("Thank you for booking"); 
                }
    }

    return (
      <div>
        <div className="register-form-container">
          <h4>Please Checkout: {checkoutId}</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Enter Your Name" />

            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              required
            />

            <input
              onBlur={handleAddress}
              type="address"
              name="address"
              id=""
              placeholder="Enter Your address"
              required
            />

            <input
              onBlur={handlePhone}
              type="phone"
              name="phone"
              id=""
              placeholder="Enter Your phone number"
              required
            />

            <input type="submit" value="submit" />
          </form>
          <Toaster />
        </div>
      </div>
    );
};

export default Checkout;