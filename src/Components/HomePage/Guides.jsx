import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import GuideCard from './GuideData';
import { FaRegHeart } from "react-icons/fa";
import "./Header.css"
import { MdOutlineWatchLater } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
const Guides = () => {
    return (
        <>

            <div className="container">
                <div className="guide-head">
                    <div className='guide-heading'>
                        <h2>News, Tips & Guides</h2>
                        <p>Favorite destinations based on customer reviews</p>
                    </div>
                    <div>
                        <Link><button className='guide-more-btn'>View More <GoArrowRight /> </button></Link>
                    </div>
                </div>

                <div className="row">
                    {
                        GuideCard.map((item, i) =>
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className='recommend-card' data-aos="zoom-in-up">
                                    <div className='recommend-card-img'>
                                        <img src={item.guidimg} alt="" />
                                        <div className='rated'>
                                            <p>
                                                {item.rate}
                                            </p>
                                        </div>
                                        <div className='like'>
                                            <FaRegHeart size={16} />
                                        </div>
                                    </div>
                                    <div className='recommend-title'>
                                        <div className='date-time'>
                                            <div className='title-days'>
                                                <MdDateRange /> <p>{item.date}</p>
                                            </div>
                                            <div className='title-days'>
                                                <MdOutlineWatchLater /> <p>{item.time}</p>
                                            </div>
                                            <div className='title-cmnt'>
                                                <FaRegCommentDots /> <p>{item.cmnt}</p>
                                            </div>
                                        </div>

                                        <h3>{item.title}</h3>


                                        <div className='title-price'>
                                            <div className='title-user'>
                                              <div className='user-img'>
                                                <img src={item.userimg} alt="" />
                                                </div> 
                                             <p><span></span> {item.user}</p>
                                            </div>
                                            <Link>
                                                <button className='book-now-btn'>Keep Reading</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>



        </>
    )
}

export default Guides