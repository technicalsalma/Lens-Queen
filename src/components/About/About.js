import React from 'react';
import './About.css'
import myself from '../../images/aboutMe2.jpg'

const About = () => {
    return (
      <div className="container">
        <div className="myself">
          <div className="about-me">
            <p>
             I am salma. My life goal is web-developer. I am fully discipline , dedicat and determine about my work. There is no shortcut to success. Hard work is the only key to achievign it.
            </p>
          </div>
          <div className="my-img">
            <img className="thumbnail rounded" src={myself} alt="" />
          </div>
        </div>
      </div>
    );
};

export default About;