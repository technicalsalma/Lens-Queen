import React from 'react';
import './About.css'
import myself from '../../images/aboutMe2.jpg'

const About = () => {
    return (
      <div className="container">
        <div className="myself">
          <div className="about-me">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              placeat dignissimos odit vitae doloremque quia perferendis quas
              voluptatem, excepturi deleniti necessitatibus nesciunt eum
              reprehenderit. Dolores dolor iusto voluptatibus magnam illo?
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