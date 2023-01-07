import React, { useContext } from 'react'
import { CartData } from '../Context'
import SingleProduct from './SingleProduct'
import SearchFilter from 'react-filter-search';
import ContentModel from './ContentModel';

const Cart = () => {

  const { cartProducts ,searchData, setCartProducts, isDarkMode,showModel, setShowModel, modelProduct, setModelProduct} =  useContext(CartData)

  return (
 
    <div>
      <div className='cart-info-div'>
        <p>Total Products : { cartProducts.length} </p>
        <p>Total Price : ${ cartProducts.reduce((acc,curr) => acc + curr.price, 0) } </p>
      </div>
    <SearchFilter 
        value={searchData}
        data={cartProducts}
        renderResults={results => {
          
          if(results.length === 0){
            return <div className='not-available-msg'> 
            <p> No Products Found 🙄</p>
            </div>
          }
         
          return <div className="products-container">
            {results.map(((product) => {
              return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } showModel={showModel} setShowModel={setShowModel} modelProduct={modelProduct} setModelProduct={setModelProduct} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
               }
               ))}
               <ContentModel />
          </div>
        }}
      />
  </div>
  )
}

export default Cart