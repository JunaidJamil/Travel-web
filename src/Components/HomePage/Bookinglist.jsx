import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
const Bookinglist = () => {
  const [key, setKey] = useState('tour');
  return (
    <>
      <div className="Booking-tabs">
        <Tabs
          defaultActiveKey="profile"
          activeKey={key}
          id="justify-tab-example"
          onSelect={(k) => setKey(k)}
          className="mb-3"
          justify
        >
          <Tab eventKey="tour" title="Tours">
            <div className="tours">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="locate">
                      <div className='locate-child'>
                        <label>
                          Location
                        </label>
                        <div className='locate-addres'>
                          <IoLocationSharp color='grey' />
                          <select name="" id="">
                            <option value="">New York, USA</option>
                            <option value="">New York, UAE</option>
                            <option value="">New York, UK</option>
                          </select>
                        </div>
                      </div>
                      <div className='locate-child'>
                        <label>
                          Check Out
                        </label>
                        <div className='locate-addres'>
                          <MdDateRange color='grey' />
                          <input type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className='locate'>
                      <div className='locate-child'>
                        <label>
                          Check In Date
                        </label>
                        <div className='locate-addres'>
                          <MdDateRange color='grey' />
                          <input type="date" />
                        </div>
                      </div>
                      <div className='locate-child'>
                        <label>
                          Guest
                        </label>
                        <div className='locate-addres'>
                          <FaUser color='grey' />
                          <select name="" id="">
                            <option value="">2 adults, 2 children</option>
                            <option value="">2 adults, 2 children</option>
                            <option value="">2 adults, 2 children</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="hotels" title="Hotels">
            Tab content for Profile
          </Tab>
          <Tab eventKey="tickets" title="Tickets">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="rentals" title="Rentals" >
            Tab content for Contact
          </Tab>
          <Tab eventKey="activites" title="Activites" >
            Tab content for Contact
          </Tab>
        </Tabs>

        <div className="search-help">
          <Link>
            <button className='search-btn'><CiSearch /> Search</button>
          </Link>

          <Link>
            <p><FaUser color='grey' /> Need some help?</p>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Bookinglist