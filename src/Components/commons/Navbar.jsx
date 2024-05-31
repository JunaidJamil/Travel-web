import React, { useState, useEffect, useCallback } from 'react';
import logo from '../Assets/Images/Travila-Logo.png';
import { IoMdMenu } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { TbWorld } from "react-icons/tb";
import "./Navbar.css";
import { IoIosSunny } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { IoMoonSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const navItem = [
    { navlist: "Home", href: "/", hoverText: "Welcome to Home" },
    { navlist: "Tour", href: "/Tour", hoverText: "Explore Tours" },
    { navlist: "Destinations", href: "/Destinations", hoverText: "Find Destinations" },
    { navlist: "Activities", href: "/Activities", hoverText: "Enjoy Activities" },
    { navlist: "Hotels", href: "/Hotels", hoverText: "Stay in Hotels" },
    { navlist: "Rental", href: "/Rental", hoverText: "Rent a Car" },
    { navlist: "Tickets", href: "/Tickets", hoverText: "Book Tickets" },
    { navlist: "Pages", href: "/Pages", hoverText: "Additional Pages" },
    { navlist: "Blog", href: "/Blog", hoverText: "Read our Blog" },
    { navlist: "Contacts", href: "/Contacts", hoverText: "Contact Us" },
];

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    // const [theme , setTheme] = useState('light-theme')

    const handleScroll = useCallback(() => {
        const scrollTop = window.scrollY;

        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        // Change navbar color based on scroll position
        if (scrollTop >= 50) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }

        // Update last scroll position
        setLastScrollTop(scrollTop);
    }, [lastScrollTop]);




    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); // Add handleScroll as a dependency

    const closeMenu = () => {
        setMenu(false);
    };
    
    const [theme, setTheme] = useState(() => {
        // Get the saved theme from localStorage, or default to 'light-theme'
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light-theme';
      });
    
      const toggle = () => {
        const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save the new theme to localStorage
      };
    
      useEffect(() => {
        document.body.className = theme; // Set the body's class to the current theme
      }, [theme]);

    return (
        <>
            <nav className={`navigation ${navColor ? 'nav-bg' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-1 col-md-6 col">
                            <div className='logo-parent'>
                                <div className="logo">
                                    <img src={logo} alt="Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col">
                            <div className='nav-list'>
                                <ul className='navs'>
                                    {navItem.map((item, i) => (
                                        <li key={i}>
                                            <NavLink
                                                to={item.href}
                                                onClick={closeMenu}
                                                className={({ isActive }) => isActive ? 'active' : ''}
                                            >
                                                <span className="title">{item.navlist} <IoIosArrowDown /></span>
                                                <div className='nav-listing'>
                                                    <h3>{item.hoverText}</h3>
                                                </div>
                                            </NavLink>
                                          
                                        </li>
                                    ))}
                                </ul>
                                <button className='menu-btn' onClick={() => setMenu(!menu)}>
                                    {menu ? (
                                        <span className='nav-cancel'>
                                            <GiCancel color='black' size={30} />
                                        </span>
                                    ) : (
                                        <span className='nav-menu'>
                                            <IoMdMenu color='black' size={30} />
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='extra-nav'>

                                <label className="dropdown-container">
                                    <TbWorld size={15} />
                                    <select name="" id="">
                                        <option value="">EN</option>
                                        <option value="">UR</option>
                                        <option value="">UK</option>
                                    </select>
                                </label>

                                <label className="dropdown-container">
                                    <select name="" id="">
                                        <option value="">USD</option>
                                        <option value="">PKR</option>
                                        <option value="">INR</option>
                                    </select>
                                </label>
                                <div className='day-night'>
                                    <Link onClick={toggle}>
                                        {/*  */}
                                        {
                                            theme === 'dark-theme' ? <IoIosSunny size={16} /> : <IoMoonSharp size={16} />
                                        }
                                        
                                    </Link>
                                </div>
                                <div className='sign-in'>
                                    <Link>
                                        <button className='sign-in-btn'>Signin</button>
                                    </Link>
                                </div>
                                <div className='menu-grid'>
                                    <CgMenuGridR fontSize={20} />
                                </div>
                            </div>
                        </div>


                        <div className={`side-menu ${menu ? 'option' : ''}`}>
                            <ul className='menu-navs'>
                                {navItem.map((item, i) => (
                                    <li key={i} className="title">
                                        <NavLink
                                            to={item.href}
                                            onClick={closeMenu}
                                            className={({ isActive }) => isActive ? 'active' : ''}
                                        >
                                            <span className="title">{item.navlist}</span>
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    <div className='sign-in'>
                                        <Link>
                                            <button className='sign-in-btn'>Signin</button>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;



