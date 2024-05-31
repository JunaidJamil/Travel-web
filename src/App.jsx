import './App.css';
import Navbar from './Components/commons/Navbar';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/commons/Footer';
import Home from './Pages/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    function aosOnMobile() {
      if (window.innerWidth <= 991) { // Adjust the breakpoint as needed
        AOS.init({
          disable: true // Disable AOS on mobile screens
        });
      } else {
        AOS.init({
          disable: false // Enable AOS on larger screens
        });
      }
    }

    aosOnMobile(); // Run on initial load
    window.addEventListener('resize', aosOnMobile); // Run on resize

    return () => {
      window.removeEventListener('resize', aosOnMobile); // Cleanup on unmount
    };
  }, []);

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/Gallery' element={<Gallery/>} />
            <Route path='/Project' element={<Project/>} />
            <Route path='/Project/Sampleproject/:id' element={<SampleProject/>} />
            <Route path='/Certification' element={<Certification/>} />
          <Route path='/Contacts' element={<Contacts/>} /> */}
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
