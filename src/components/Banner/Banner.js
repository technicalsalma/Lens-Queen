import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../images/banner1.png'
import banner1 from '../../images/Banner/banner1.jpg'
import banner2 from '../../images/Banner/banner2.jpg'
import './Banner.css'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
   
  }
    return (
      <div className="banner">
        {/* <img src={banner} alt="" /> */}

        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="First slide" />
            <Carousel.Caption>
              <h3>Wedding Photo</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Drone wedding photography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Pre-Wedding Photography</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;