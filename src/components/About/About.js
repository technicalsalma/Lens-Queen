import React from 'react';
import './About.css'
import girl from "../../images/girls-images.png";

const About = () => {
    return (
      <div className="container">
        <div className="myself">
          <div className="about-me">
            <div>
              <h3>About Me !!</h3>
              <div className="w-20 h-2"></div>
            </div>

            <div>
              <p>
                Hello!! I am salma. I went to be a web-developer.I am trying to
                explore myself. So, I enrolled the course compleate web-development
                by Jhankar Mahbub and I am successfully continuing my course. I
                am fully discipline , dedicat and determine about my work.I have
                set a goal to be a junior frontend developer in 2022 and get a
                job/intern and I am daynight hard working for this. If I am
                successful It will be a big achievement in my life And I will
                make my parents proud of me
              </p>
            </div>
          </div>
          <div className="my-img">
            <img className="w-100" src={girl} alt="" />
          </div>
        </div>
      </div>
    );
};

export default About;