import React, { useContext } from 'react'
import { CartData } from '../Context'
import SingleProduct from './SingleProduct'

const Cart = () => {

  const { cartProducts , setCartProducts, isDarkMode, setIsDarkMode} =  useContext(CartData)

  return (
    <div className='products-container'>
       {cartProducts.map((product => {
       return <SingleProduct key={product.title} product={ product } isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} cartProducts={cartProducts} setCartProducts={setCartProducts} />
       }))}
    </div>
  )
}

export default Cart