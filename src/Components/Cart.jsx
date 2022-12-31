import React, { useContext } from 'react'
import { CartData } from '../Context'
import SingleProduct from './SingleProduct'
import SearchFilter from 'react-filter-search';

const Cart = () => {

  const { cartProducts ,searchData, setCartProducts, isDarkMode} =  useContext(CartData)

  return (
 
    <div>
      
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
              return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts}/>
               }
               ))}
          </div>
        }}
      />
  </div>
  )
}

export default Cart