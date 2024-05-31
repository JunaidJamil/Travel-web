import React, { useEffect } from 'react'
import secondvideo from "../Assets/Images/Videos/travel-video-2.mp4"
import thirdvideo from "../Assets/Images/Videos/travel-video-3.mp4"
import fourthvideo from "../Assets/Images/Videos/travel-video-4.mp4"
import fifthvideo from "../Assets/Images/Videos/travel-video-5.mp4"
import { FaPlay } from "react-icons/fa";
import { Fancybox } from '@fancyapps/ui';
import { Link } from 'react-router-dom'
import { CgMenuGridR } from "react-icons/cg";
const VideoSection = () => {

    useEffect(() => {
        Fancybox.bind("[data-fancybox=gallery]", {
            Thumbs: {
                type: "classic",
            },
            Toolbar: {
                display: ['thumbs', 'close'],
            },
            buttons: [
                'zoom',
                'slideShow',
                'thumbs',
                'close'
            ],
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);


    return (
        <section className='video-section'>
            <div className="container">
                <div className='video-head'>
                    <h2>Journey to the Most Beautiful Places on Earth</h2>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-4">
                        <div className='first-video video-container'  data-aos="fade-right">
                            <div className='first-child'>
                                <a href={fourthvideo} data-fancybox="gallery">
                                    <video>
                                        <source src={fourthvideo} type="video/mp4" />
                                    </video>
                                    <div className="play-button">
                                        <FaPlay />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className='second-video video-container'  data-aos="zoom-in-down">
                            <div className='second-child'>
                                <a href={thirdvideo} data-fancybox="gallery">
                                    <video>
                                        <source src={thirdvideo} type="video/mp4" />
                                    </video>
                                    <div className="play-button">
                                        <FaPlay />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='second-video video-container' data-aos="zoom-in-up">
                            <div className="second-child-2">
                                <a href={secondvideo} data-fancybox="gallery">
                                    <video>
                                        <source src={secondvideo} type="video/mp4" />
                                    </video>
                                    <div className="play-button">
                                        <FaPlay />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className='fourth-video video-container' data-aos="fade-left"> 
                            <div>
                                <a href={fifthvideo} data-fancybox="gallery">
                                    <video>
                                        <source src={fifthvideo} type="video/mp4" />
                                    </video>
                                    <div className="play-button">
                                        <FaPlay />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='fourth-video video-container' data-aos="fade-left">
                            <a href={fourthvideo} data-fancybox="gallery">
                                <video>
                                    <source src={fourthvideo} type="video/mp4" />
                                </video>
                                <div className="play-button">
                                    <FaPlay />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='load-video'>
                    <Link>
                        <button className='load-video-btn'><CgMenuGridR /> Load More Tour</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default VideoSection
