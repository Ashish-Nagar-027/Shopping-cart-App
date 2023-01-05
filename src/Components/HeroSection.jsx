import React from 'react'
import { useContext, useState } from 'react'
import { CartData } from '../Context'
import { TopProducts } from './TopProducts'
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import { useEffect } from 'react';
import { act } from 'react-dom/test-utils';

const HeroSection = () => {
    const { showHeroSection, isDarkMode } =  useContext(CartData)
    
    const [topProductsData, setTopProductsData] = useState(TopProducts)
    const [activeIndex, setActiveIndex ] = useState(0)

    function setIndexHandler(direction, index) {
            // console.log(index)
         if(direction === 'previous-next') {
          if(index <= 0){
            setActiveIndex(TopProducts.length - 1 )
          }else {
            setActiveIndex(activeIndex - 1)
          }
         }
         if(direction === 'show-next') {
          if(index >= (TopProducts.length-1)){
            setActiveIndex(0)
          }else {
            setActiveIndex(activeIndex + 1)
          }
         }
    }
    
    useEffect(() => {
      const lastIndex = topProductsData.length - 1
      if(activeIndex < 0 ) {
        setActiveIndex(lastIndex)
      }
      if(activeIndex > lastIndex ) {
        setActiveIndex(0)
      }
           
      
    }, [activeIndex,topProductsData])
    

  return (
    <div className={ showHeroSection ? 'hero-section' : 'hero-section hide-hero-section'
    && isDarkMode ? "dark" : ""}> 
     <div className='topLeftRightIcons'>
             <div className="left-icon" onClick={() => setActiveIndex(activeIndex - 1)}><AiFillLeftSquare /></div>
             <div className="right-icon " onClick={() => setActiveIndex(activeIndex + 1)}><AiFillRightSquare /></div>
      </div>
    {
      topProductsData.map((productItem,index) => {
           let productPosition = 'top-next-item';

           if(activeIndex === index ){
              productPosition = 'top-active-item'
           }

           if(index === activeIndex - 1 || (activeIndex === 0 && index === topProductsData.length -1 ) ){
              productPosition = 'top-previous-item'
           }

        return  <div className={showHeroSection ? `hero-section-details ${productPosition}`  :  ' hide-hero-section' } key={productItem.title}>
         
         <div className="hero-section-left">
            <img src={productItem.image} alt={productItem.title} className ="top-product-image"></img> 
         </div>
         <div className="hero-section-right">
              <h2>{productItem.title}</h2>
         </div>
       </div>
        

      })
    }

    </div>
  )
}

export default HeroSection