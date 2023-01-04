import React from 'react'
import { useContext, useState } from 'react'
import { CartData } from '../Context'
import { TopProducts } from './TopProducts'
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";

const HeroSection = () => {
    const { showHeroSection, isDarkMode } =  useContext(CartData)

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
    

  return (
    <div className={ showHeroSection ? 'hero-section' : 'hero-section hide-hero-section'
    && isDarkMode ? "dark" : ""}> 
    
    {
      TopProducts.map((productItem,index) => {
        if(index === activeIndex){
          
        return   <div className={showHeroSection ? 'hero-section-details' :  'hero-section-details hide-hero-section'} key={productItem.title}>
          <div className='topLeftRightIcons'>
             <div className="left-icon" onClick={() => setIndexHandler("previous-next", index)}><AiFillLeftSquare /></div>
             <div className="right-icon " onClick={() => setIndexHandler("show-next",index)}><AiFillRightSquare /></div>
         </div>
         <div className="hero-section-left">
            <img src={productItem.image} alt={productItem.title} className ="top-product-image"></img> 
         </div>
         <div className="hero-section-right">
              <h2>{productItem.title}</h2>
         </div>
       </div>
        }

      })
    }

    </div>
  )
}

export default HeroSection