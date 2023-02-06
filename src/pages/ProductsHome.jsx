
import React, { useContext } from 'react'
import { CartData } from '../Context'
import { useEffect, useState } from 'react'
import SearchFilter from 'react-filter-search';
import ContentModel from '../Components/ContentModel';
import HeroSection from '../Components/Products page components/HeroSection';
import SingleProduct from '../Components/SingleProduct'
import Categories from '../Components/Products page components/Categories';
import { AllProducts } from '../Components/AllProducts'
import SearchSection from '../Components/Products page components/SearchSection';

const Home = () => {

  
  const [ categories ] = useState(["All","electronics","men's clothing","jewelery" ,"women's clothing"])
  
  const [currentCategory, setCurrentCategory] = useState("All")
  
  const { cartProducts ,setProducts , setCartProducts, isDarkMode, products , searchData, showModel, setShowModel, modelProduct, setModelProduct  } =  useContext(CartData)
  
  useEffect(() => {
 
  setProducts(AllProducts)

 }, [setProducts])
   
      
  
 useEffect(() => {
  setCurrentCategory('All')
 }, [])
 

  return (
  <div>
    {/* Top Hero section */}
    <HeroSection />
    
    {/* search section */}
    <SearchSection />

     {/* all categories type section */}
    <Categories categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>

   {/* all products here */}

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
              {results.map(((product) => {

                if(currentCategory === "All") {
                  return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts} showModel={showModel} setShowModel={setShowModel} modelProduct={modelProduct} setModelProduct={setModelProduct}/>
                }

                else if(product.category === currentCategory) {
                  return <SingleProduct key={product.title} isDarkMode={isDarkMode} product={ product } cartProducts={cartProducts} setCartProducts={setCartProducts} showModel={showModel} setShowModel={setShowModel} modelProduct={modelProduct} setModelProduct={setModelProduct}/>
                }

                return null
                
           }))}
               
           {/* floating model */}
              <ContentModel />

            </div>
          }}
        />
    </div>
  )
}

export default Home