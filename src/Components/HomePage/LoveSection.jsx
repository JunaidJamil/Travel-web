import React from 'react'
import img from "../Assets/Images/love.png"
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import security from "../Assets/Images/security.png"
import customer from "../Assets/Images/customer.png"
import policies from "../Assets/Images/policies.png"
import reputable from "../Assets/Images/reputable.png"
export const LoveSection = () => {
    return (
        <>
        <section className='love-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className='love-left-side' data-aos="fade-right">
                                <div className='love-img'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className='love-content-parent' data-aos="fade-left">
                                <div>
                                    <div className='love-content'>
                                        <h2>You will love us</h2>
                                        <p>Because more than 268 other customers have loved us too</p>
                                    </div>
                                    <div className='security-policies'>
                                        <div className='love-titles'>
                                            <div className='policies-parent'>
                                                <div className='security-logo'>
                                                    <img src={security} alt="" />
                                                </div>
                                                <div className='policies-child'>
                                                    <h3>Security Assurance</h3>
                                                    <p>Demonstrates commitment to user
                                                        data security through encryption and
                                                        secure payment practices</p>
                                                    <Link>
                                                        Learn More <GoArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='love-titles'>
                                            <div className='policies-parent'>
                                                <div className='security-logo'>
                                                    <img src={customer} alt="" />
                                                </div>
                                                <div className='policies-child'>
                                                    <h3>Customer Support</h3>
                                                    <p>Demonstrates commitment to user
                                                        data security through encryption and
                                                        secure payment practices</p>
                                                    <Link>
                                                        Learn More <GoArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='love-titles'>
                                            <div className='policies-parent'>
                                                <div className='security-logo'>
                                                    <img src={policies} alt="" />
                                                </div>
                                                <div className='policies-child'>
                                                    <h3>Transparent Policies</h3>
                                                    <p>Demonstrates commitment to user
                                                        data security through encryption and
                                                        secure payment practices</p>
                                                    <Link>
                                                        Learn More <GoArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='love-titles'>
                                            <div className='policies-parent'>
                                                <div className='security-logo'>
                                                    <img src={reputable} alt="" />
                                                </div>
                                                <div className='policies-child'>
                                                    <h3>Reputable Affiliations</h3>
                                                    <p>Demonstrates commitment to user
                                                        data security through encryption and
                                                        secure payment practices</p>
                                                    <Link>
                                                        Learn More <GoArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

         
        </section >

        </>
    )
}
