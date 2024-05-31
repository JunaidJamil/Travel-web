import React from 'react'
import Footerlogo from "../Assets/Images/Travila-Logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineLocalPhone } from "react-icons/md";
import pay1 from "../Assets/Images/paypal.png"
import pay2 from "../Assets/Images/stripe.png"
import pay3 from "../Assets/Images/mastercard.png"
import pay4 from "../Assets/Images/skrill.png"
const Footer = () => {
    return (

        <>
            <footer className='footer-parent'>
                <div className="container">
                    <div className="row padding-footer">

                        <div className="col-lg-4">
                            <div className='footer-logo'>
                                <img src={Footerlogo} alt="" />
                            </div>
                            <ul className='footer-cnt-list'>
                                <li>
                                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                                        <FaLocationDot />
                                        <p>4517 Washington Ave. Manchester, Kentucky
                                            39495</p>
                                    </a>
                                </li>
                                <li><a href="tel:512.333.2222"><FaClock /><p>Hours: 8:00 - 17:00, Mon - Sat</p></a></li>
                                <li><a href="mailto:sampleemail@gmail.com"><IoMailOutline /> support@travila.com    </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Services</p>
                                </div>
                                <ul className='service-list'>
                                    <li><Link to="/">Tour Guide</Link></li>
                                    <li><Link to="/Gallery">Tour Booking</Link></li>
                                    <li><Link to="/Project">Hotel Booking</Link></li>
                                    <li><Link to="/">Ticket Booking</Link></li>
                                    <li><Link to="/Gallery">Rental Services</Link></li>
                                    <li><Link to="/Project">Travel plane</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Subscribe For Newsletter</p>
                                </div>
                                <div className='subscribe-footer'>
                                    <TfiEmail size={14} />
                                    <input type="email" placeholder='Email' />
                                    <div className='subcriber-btn'>
                                        <button className='sub-btn'>Subscribe</button>
                                    </div>
                                </div>
                                <div className='no-ads'>
                                    <p>No ads. No trails. No commitments</p>
                                </div>
                            </div>
                        </div>





                        <div className="col-lg-4">
                            <div className='follow-head'>
                                <p>Follow us</p>
                            </div>
                            <div className='footer-social'>
                                <FaFacebookF className='footer-icon' />
                                <FaTwitter className='footer-icon' />
                                <FaLinkedin className='footer-icon' />
                                <FaPinterestP className='footer-icon' />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='follow-head'>
                                <p><MdOutlineLocalPhone /> Need help? Call us</p>
                                <div className='cont-num'>
                                    <a href='tel:1-800-222-8888'><p>1-800-222-8888</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='follow-head'>
                                <p>Payments</p>
                            </div>
                            <div className='payment-method'>
                                <div className='method'>
                                    <Link>
                                    <img src={pay1} alt="" />
                                    </Link>

                                </div>
                                <div className='method'>
                                    <Link>
                                    <img src={pay2} alt="" />
                                    </Link>
                                </div>
                                <div className='method'>
                                    <Link>
                                    <img src={pay3} alt="" />
                                    </Link>
                                </div>
                                <div className='method'>
                                    <Link>
                                    <img src={pay4} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                {/* <div className='footer-rights'>
                    <p>© 2021 All Rights Reserved</p>
                </div> */}
            </footer>

        </>
    )
}

export default Footer