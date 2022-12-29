import React, {useContext} from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsMoon, BsSun  } from "react-icons/bs";
import { CartData } from '../Context';

import { Link } from 'react-router-dom'

const Header = () => {

  const { cartProducts,isDarkMode, setIsDarkMode } =  useContext(CartData)

  return (
    <div className={isDarkMode ? "Navbar dark-navbar" : "Navbar"}>
        <div className='left-nav'>
         <Link to="/" className='logo'>Shopping Cart</Link>
        </div>
        
        <div className='right-nav'>
            <div className='search'>
              <form>
                 <input type='text' className='search-input'></input>
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