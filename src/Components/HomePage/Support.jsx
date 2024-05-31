import React from 'react'
import img1 from "../Assets/Images/support-in-1.png"
import img2 from "../Assets/Images/support-in-2.png"
import travel from "../Assets/Images/travel.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Support = () => {
    return (
        <>
        <section className='support-section'>

  
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="support"  data-aos="fade-right">
                            <h2>24/7 Support</h2>
                            <p>We are here to help, before,
                                during, and even after your trip.</p>
                            <div>
                                <img src={img1} alt="" />
                            </div>
                            <div>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='best-price' data-aos="fade-down">
                            <h2>Best Price</h2>
                            <p>Price match within 48 hours of order
                                confirmation</p>

                            <Link>
                                <button className='view-btn'><FaArrowRightLong /> View More</button>
                            </Link>
                        </div>

                        <div className='explore' data-aos="fade-up">
                            <p>Save your time!</p>
                            <h2>Explore, Book, Soar: Your
                                Journey Awaits!</h2>
                            <Link>
                                <button className='view-btn'><FaArrowRightLong /> View More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="travel-parent" data-aos="fade-left">
                            <div className='travel'>
                            </div>
                                <div className='travel-image'>
                                <img src={travel} alt="" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default Support