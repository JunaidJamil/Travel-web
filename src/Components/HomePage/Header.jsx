// Header.jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import "./Header.css"
import header1 from "../Assets/Images/header-slide.png"
import header2 from "../Assets/Images/header-slide-2.jpg"
import header3 from "../Assets/Images/header-slide-3.jpg"
import Head from './Head';




const Header = () => {
    var settings = {
        fade:true,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
              <ul style={{ margin: "0px", padding:"0px" , gap:'5px', color:'white' }}> {dots} </ul>
            </div>
          ),
      };
    return (

    <>
    <div className='header-section'>
    <Slider {...settings}>
      <div className='header-back'>
        <img src={header1} alt="" />
      </div>
      <div className='header-back'>
        <img src={header2} alt="" />
      </div>
      <div className='header-back'>
        <img src={header3} alt="" />
      </div>
    </Slider>
    </div>

    <div>
        <Head/>
    </div>
    </>

    );
};

export default Header;
