
import React, { useContext } from 'react'
import { CartData } from '../Context'
import { useEffect } from 'react'
import SearchFilter from 'react-filter-search';


import SingleProduct from './SingleProduct'

const Home = () => {

  const { cartProducts , setCartProducts, isDarkMode, products , setProducts, searchData, setSearchData } =  useContext(CartData)
  
  useEffect(() => {
    let productsApiUrl  = 'https://fakestoreapi.com/products'

    async function getProducts(productsApiUrl){
      let response = await fetch(productsApiUrl)
      let data = await response.json()
        setProducts(data)
    }
    
  getProducts(productsApiUrl)

 }, [])
  
 
  return (

    <div>
      <SearchFilter 
          value={searchData}
          data={products}
          renderResults={results => (
            <div className="products-container">
              {results.map((product => {
                return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts}/>
                 }))}
            </div>
          )}
        />
    </div>
  )
}

export default Home