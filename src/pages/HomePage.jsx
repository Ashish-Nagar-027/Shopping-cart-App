import React from 'react'
import HomePageHeroSection from '../Components/Homepage components/HomePageHeroSection'
import HomePageFooter from '../Components/Homepage components/HomePageFooter'
import { OurProducts } from '../Components/Homepage components/OurProducts'


const HomePage = () => {
  return (
    <div className='homepage'>
      <HomePageHeroSection />
      <OurProducts />
      <HomePageFooter />
    </div>
  )
}

export default HomePage