import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Navbar'>
        <div class='left-nav'>
         <Link to="/" className='logo'>Shopping Cart</Link>
        </div>
        
        <div className='right-nav'>
            <div className='search'>
              <form>
                 <input type='text' className='search-input'></input>
              </form>
            </div>
            <div className='cart-icon'>
              <Link to="/Cart"><AiOutlineShoppingCart /></Link>
            </div>
        </div>
    </div>
  )
}




export default Header