import React from 'react'
import Slider from "react-slick";
import dest1 from "../Assets/Images/dest-1.png"
import dest2 from "../Assets/Images/dest-2.png"
import dest3 from "../Assets/Images/dest-3.png"
import dest4 from "../Assets/Images/dest-4.png"
import dest5 from "../Assets/Images/dest-5.png"
import dest6 from "../Assets/Images/dest-6.png"
import dest7 from "../Assets/Images/dest-7.png"
import dest8 from "../Assets/Images/dest-8.png"
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
        <div
            className="next-arrow"
            style={{ ...style,}}
            onClick={onClick}
        >
            <IoMdArrowForward color='black' size={20} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="prev-arrow"
            style={{ ...style,}}
            onClick={onClick}
        >
            <IoMdArrowBack  color='black' size={20} />
        </div>
    );
}
const Destination = () => {
    var settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 6,
                      slidesToScroll: 1,
                      infinite: true,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    };
    return (
        <>
        <section className='destination-section' data-aos="fade-up">
            <div className="container">
                <div className='Destination-head'>
                    <h2>Popular Destinations</h2>
                    <p>Navigate the Globe with Confidence</p>
                </div>
                <div className="row">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='destination'>
                                <div className='dest'>
                                    <img src={dest1} alt="" />
                                </div>
                                <h4>Eiffel Tower</h4>
                                <p>356 Tours</p>
                            </div>
                            <div className='destination'>
                                <div className='dest'>
                                    <img src={dest2} alt="" />
                                </div>
                                <h4>Machu Picchu</h4>
                                <p>356 Tours</p>
                             </div>
                                <div className='destination'>
                                    <div className='dest'>
                                        <img src={dest3} alt="" />
                                    </div>
                                    <h4>Great Wall</h4>
                                    <p>356 Tours</p>
                                </div>
                                <div className='destination'>
                                    <div className='dest'>
                                        <img src={dest4} alt="" />
                                    </div>
                                    <h4>Statue of Liberty</h4>
                                    <p>356 Tours</p>
                                </div>
                                <div className='destination'>
                                    <div className='dest'>
                                        <img src={dest5} alt="" />
                                    </div>
                                    <h4>Taj Mahal</h4>
                                    <p>356 Tours</p>
                                </div>
                                <div className='destination'>
                                    <div className='dest'>
                                        <img src={dest6} alt="" />
                                    </div>
                                    <h4>Grand Canyon</h4>
                                    <p>356 Tours</p>
                                </div>
                                <div className='destination'>
                                    <div className='dest'>
                                        <img src={dest7} alt="" />
                                    </div>
                                    <h4>Colosseum</h4>
                                    <p>356 Tours</p>
                                </div>
                                <div className='destination'>
                                    <div className='dest'>
                                        <img src={dest8} alt="" />
                                    </div>
                                    <h4>Opera House</h4>
                                    <p>356 Tours</p>
                                </div>
                        </Slider>
                    </div>
                </div>
            </div>
    </section>
        </>
    )
}

export default Destination