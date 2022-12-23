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
            <div>
            <Link to="/Cart" className='cart-icon'>
              <AiOutlineShoppingCart />
              <div className='cart-items-number'>1</div>
            </Link>
            </div>
        </div>
    </div>
  )
}




export default Header