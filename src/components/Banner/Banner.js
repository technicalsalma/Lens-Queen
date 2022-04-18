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
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="First slide" />
            <Carousel.Caption>
              <h3>Hi, I am salma!!</h3>
              <p>
                I Provide Wedding Photography, Cinematography & Videography
                Services. Enquire Now. I Primarily Specialize In Bangladesh
                Weddings & Shoot In Documentary Style. Serving Since 2006.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Hi, I am salma!!</h3>
              <p>
                I Provide Wedding Photography, Cinematography & Videography
                Services. Enquire Now. I Primarily Specialize In Bangladesh
                Weddings & Shoot In Documentary Style. Serving Since 2006.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Hi, I am salma!!</h3>
              <p>
                I Provide Wedding Photography, Cinematography & Videography
                Services. Enquire Now. I Primarily Specialize In Bangladesh
                Weddings & Shoot In Documentary Style. Serving Since 2006.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;