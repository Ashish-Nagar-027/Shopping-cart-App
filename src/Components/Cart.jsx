import React, { useContext } from 'react'
import { CartData } from '../Context'
import SingleProduct from './SingleProduct'
import SearchFilter from 'react-filter-search';

const Cart = () => {

  const { cartProducts ,searchData, setCartProducts, isDarkMode, setIsDarkMode} =  useContext(CartData)

  return (
 
    <div>
    <SearchFilter 
        value={searchData}
        data={cartProducts}
        renderResults={results => (
          <div className="products-container">
            {results.map((product => {
              return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts}/>
               }
               ))}
          </div>
        )}
      />
  </div>
  )
}

export default Cart