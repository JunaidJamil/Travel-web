import React from 'react'
import { Link } from 'react-router-dom'
import google from '../Assets/Images/googleplay.png'
import app from '../Assets/Images/appstore.png'
import Bookinglist from './Bookinglist'
const Head = () => {
    return (
        <>
            <div className="head">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='head-content' data-aos="fade-right">
                                <div className='head-content-child'>
                                    <div className='travel-redefined'>
                                        <Link>
                                            <button className='travel-head-btn'>Luxury Travel Redefined</button>
                                        </Link>
                                    </div>
                                    <div className='head-heading'>
                                        <h1>
                                            Your Passport to
                                            Global Glamour
                                        </h1>
                                    </div>
                                    <div className='head-para'>
                                        <p>Personalized Travel Experiences
                                            Expert Destination Knowledge
                                            Exceptional Customer Service</p>
                                    </div>

                                    <div className='play'>
                                        <Link><img src={google} alt="" /></Link>
                                        <Link><img src={app} alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Bookinglist />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Head