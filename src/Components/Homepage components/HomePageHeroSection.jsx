import React from 'react'
import { Link } from 'react-router-dom'
const HomePageHeroSection = () => {
  return (
    <div className='Home-Hero-section'>
        <div className='left-Home-Hero-section'>
            <p className='home-hero-logo'>Welcome To <span >Your-Cart</span></p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, natus quasi optio beatae, sed architecto autem voluptatibus eius porro maxime recusandae commodi excepturi tenetur vero eligendi doloribus at nisi ipsam.</p>
            <Link to="/products" >
              products
            </Link>
        </div>
        <div className='right-Home-Hero-section'> 
             <img alt='home-img' className='Home-heor-section-side-img' src='https://images.pexels.com/photos/942320/pexels-photo-942320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
        </div>
    </div>
  )
}

export default HomePageHeroSection