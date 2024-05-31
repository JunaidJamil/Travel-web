import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import RecommendData from './RecommendCardData';
import { CgMenuGridR } from "react-icons/cg";
import "./Header.css"

const Recommend = () => {
    return (
        <>
            <div className="container">
                <div className='recommend-head'>
                    <h2>Recommended For You</h2>
                    <p>The best booking platform you can trust</p>
                </div>
                <div className="row">
                    {
                        RecommendData.map((item, i) =>
                            <div className="col-md-6 col-lg-4" key={i}>
                                <div className='recommend-card' data-aos="zoom-in">
                                    <div className='recommend-card-img'>
                                        <img src={item.card1} alt="" />
                                        <div className='rated'>
                                            <p className={item.rated === 'Best Sale' ? 'green-text' : ''}>
                                                {item.rated}
                                            </p>
                                        </div>
                                        <div className='like'>
                                            <FaRegHeart size={16} />
                                        </div>
                                    </div>
                                    <div className='recommend-title'>
                                        <h3>{item.title}</h3>
                                        <div className='days-time'>
                                            <div className='title-days'>
                                                <MdOutlineWatchLater /> <p>{item.days}</p>
                                            </div>
                                            <div className='title-days'>
                                                <FaUser /> <p>{item.guest}</p>
                                            </div>
                                        </div>
                                        <div className='title-price'>
                                            <p><span>{item.price}</span> / person</p>
                                            <Link>
                                                <button className='book-now-btn'>Book Now</button>
                                            </Link>
                                        </div>
                                        <div className='recom-review'>
                                            <FaStar color='#FFC700' />  <p><span>4.96 </span>(672 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <div className='load-tour'>
                    <Link> <button className='load-tour-tbn'><CgMenuGridR /> Load More Tours</button></Link>
                </div>

            </div>
        </>
    )
}

export default Recommend