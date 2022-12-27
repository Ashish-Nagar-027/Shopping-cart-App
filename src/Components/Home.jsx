
import React from 'react'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { CartData } from '../Context'

const Home = () => {
  
 const {cartProducts, setCartProducts } =  useContext(CartData)
  
  const [products , setProducts] = useState([])

  let productsApiUrl  = 'https://fakestoreapi.com/products?limit=10'
   
  async function getProducts(productsApiUrl){
    let response = await fetch(productsApiUrl)
    let data = await response.json()
      setProducts(data)
  }
  
  useEffect(() => {
    // https://fakestoreapi.com/products

  getProducts(productsApiUrl)

 }, )
  
   function editedTitle(title) {
    if (title.length > 30 ) {
      return title.slice(0,30) + ' ...'
    }
    else {
      return title
    }
   }

   function setCartproductsfunction(product) {
    let itemAlreadyInCart = true
    if(cartProducts.find((item) =>item.title === product.title)){
      itemAlreadyInCart = false
    }
    
    if(itemAlreadyInCart) {
      setCartProducts([...cartProducts, product])
      
    } else {
      console.log('product is available')
     
    }
      
   }
 
  return (

    <div className='products-container'>
       {products.map((product => {
       return <div className='product-box' key={product.id}>
        <img src={product.image} className='product-img' alt={product.name}></img>
        <div className="product-details">
          <p>{editedTitle(product.title)}</p>
          <p>Price : ${product.price}</p>
        </div>
        <button className='add-to-cart-btn' onClick={()=> setCartproductsfunction(product)} >Add to cart</button>
        </div>
       }))}
    </div>
  )
}

export default Home