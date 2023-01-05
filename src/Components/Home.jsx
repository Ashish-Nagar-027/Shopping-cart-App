
import React, { useContext } from 'react'
import { CartData } from '../Context'
import { useEffect, useState } from 'react'
import SearchFilter from 'react-filter-search';
import ContentModel from './ContentModel';
import HeroSection from './HeroSection';


import SingleProduct from './SingleProduct'


const Home = () => {

  const { cartProducts , setCartProducts, isDarkMode, products , setProducts, searchData, showModel, setShowModel, modelProduct, setModelProduct } =  useContext(CartData)
  
  let [fetching, setFatching] = useState(false)

  useEffect(() => {
    let productsApiUrl  = 'https://fakestoreapi.com/products'
    
    async function getProducts(productsApiUrl){
      setFatching(true)
      let response = await fetch(productsApiUrl)
      let data = await response.json()
        setProducts(data)
        setFatching(false)
    }
    
  getProducts(productsApiUrl)

 }, [])
  
 
  return (
  <div>
    <HeroSection />
    { fetching ? 
    <h1 className={isDarkMode ?"loading-data-text dark-color" : "loading-data-text"}> Loading . . .  </h1> :
    <SearchFilter 
          value={searchData}
          data={products}
          renderResults={results => {

            if(results.length === 0){
              return <div className='not-available-msg'> 
              <p> No Products Found 🙄</p>
              </div>
            }

            return <div className="products-container">
              {results.map((product => {
                console.log(product.category);
                
                return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts} showModel={showModel} setShowModel={setShowModel} modelProduct={modelProduct} setModelProduct={setModelProduct}/>
           }))}
              <ContentModel />
            </div>
          }}
        />
    }
    </div>
  )
}

export default Home