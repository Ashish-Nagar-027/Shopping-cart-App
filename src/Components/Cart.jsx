import React, { useContext } from 'react'
import { CartData } from '../Context'

const Cart = () => {

  const {cartProducts, setCartProducts } =  useContext(CartData)

  function editedTitle(title) {
    if (title.length > 30 ) {
      return title.slice(0,30) + ' ...'
    }
    else {
      return title
    }
   }

  console.log(cartProducts);
  return (
    <div className='products-container'>
       {cartProducts.map((product => {
       return <div className='product-box' key={product.id}>
        <img src={product.image} className='product-img' alt={product.name}></img>
        <div className="product-details">
          <p>{editedTitle(product.title)}</p>
          <p>Price : ${product.price}</p>
        </div>
        <button className='add-to-cart-btn' >Remove from Cart</button>
        </div>
       }))}
    </div>
  )
}

export default Cart