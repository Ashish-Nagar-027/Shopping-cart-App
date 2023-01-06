import React, {useContext} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsMoon, BsSun, BsSearch  } from "react-icons/bs";
import { CartData } from '../Context';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {

  const { cartProducts,isDarkMode, setIsDarkMode, setSearchData, setShowHeroSection  } =  useContext(CartData)
  
  function inputCangeHandler(event) {
    let value = event.target.value

    if ((value.trim()).length > 1){
      setShowHeroSection(false)
    }
    else {
      setShowHeroSection(true)
    }

    setSearchData(value)
  }  

  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className={isDarkMode ? "Navbar dark-navbar" : "Navbar"}>
        <div className='left-nav'>
         <Link to="/" className='logo'>Shopping Cart</Link>
        </div>
        
        <div className='right-nav'>
            <div className='search'>
              <form onSubmit={(event) => event.preventDefault()}>
                 <input type='text' className={showSearch ? 'search-input show-search' : 'search-input'}  onChange={(event) => inputCangeHandler(event)}></input>
                 <BsSearch className='searchIcon' onClick={()=> setShowSearch(!showSearch)}/>
              </form>
            </div>
            <div className={isDarkMode ? 'cart-div dark-cart-div' : 'cart-div'}>
            <Link to="/Cart" className='cart-icon'>
              <button className='nav-btns'><AiOutlineShoppingCart /></button>
              <button className='cart-items-number nav-btns'>{cartProducts.length}</button>
            </Link>
            </div>
            <div className='themeChangeIcon' onClick={() => setIsDarkMode(!isDarkMode)}>
              <button className='nav-btns'>{isDarkMode ? <BsMoon /> : <BsSun />}</button>
            </div>
        </div>
    </div>
  )
}



export default Header