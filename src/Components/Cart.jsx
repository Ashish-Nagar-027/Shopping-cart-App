import React, { useContext } from 'react'
import { CartData } from '../Context'
import SingleProduct from './SingleProduct'

const Cart = () => {

  const { cartProducts , setCartProducts} =  useContext(CartData)

  return (
    <div className='products-container'>
       {cartProducts.map((product => {
       return <SingleProduct key={product.title} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts} />
       }))}
    </div>
  )
}

export default Cart