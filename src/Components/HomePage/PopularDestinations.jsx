import React from 'react'
import PopularData from './PopularData'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const PopularDestinations = () => {
    return (
        <>
            <section className='Popular-section'>


                <div className="container">
                    <div className='recommend-head'>
                        <h2>Popular Destinations</h2>
                        <p>Favorite destinations based on customer reviews</p>
                    </div>
                    <div className='selecing-nav' data-aos="zoom-in">
                        <DropdownButton id="dropdown-basic-button" title="Categories" >
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Duration">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton id="dropdown-basic-button" title="Review / Rating">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton id="dropdown-basic-button" title="Price range">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                    </div>
                    <div className="row">
                        {
                            PopularData.map((popular, i) => {
                                const isLastItem = i === PopularData.length - 1;
                                return (
                                    <div className={`col-lg-3 col-md-6 ${isLastItem ? 'last-item' : ''}`} key={i} data-aos="zoom-in">
                                        {isLastItem ? (
                                            <div className='popular browse-parent' >
                                                <div className='brows-head'>
                                                    <h4>{popular.title}</h4>
                                                </div>
                                                <div className='browse'>
                                                    <p>{popular.tours}</p>
                                                    <Link className='acivities-arrow'><GoArrowRight /></Link>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='popular'>
                                                <div className='popularity-img'>
                                                    <img src={popular.img} alt="" />
                                                </div>
                                                <h4>{popular.title}</h4>
                                                <div className='activites'>
                                                    <p>{popular.tours}</p>
                                                    <Link className='acivities-arrow'><GoArrowRight /></Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>



        </>
    )
}

export default PopularDestinations