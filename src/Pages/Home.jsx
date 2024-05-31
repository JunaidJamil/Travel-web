import React from 'react'
import Header from '../Components/HomePage/Header'
import Destination from '../Components/HomePage/Destination'
import Recommend from '../Components/HomePage/Recommend'
import ClientCount from '../Components/HomePage/ClientCount'
import Flight from '../Components/HomePage/Flight'
import Support from '../Components/HomePage/Support'
import { LoveSection } from '../Components/HomePage/LoveSection'
import PopularDestinations from '../Components/HomePage/PopularDestinations'
import VideoSection from '../Components/HomePage/VideoSection'
import Faq from '../Components/HomePage/Faq'
import Guides from '../Components/HomePage/Guides'


const Home = () => {
  return (
    <>
      <Header />
      <Destination />
      <Recommend />
      <ClientCount />
      <Flight />
      <Support />
      <LoveSection />
      <PopularDestinations />
      <VideoSection />
      <Faq />
      <Guides/>
    </>
  )
}

export default Home