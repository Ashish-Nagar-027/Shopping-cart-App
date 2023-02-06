import React from 'react'
import { useContext, useState } from 'react'
import { CartData } from '../../Context'
import { TopProducts } from './TopProducts'
import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import { useEffect } from 'react';


const HeroSection = () => {
    const { isDarkMode } =  useContext(CartData)
    
    const [topProductsData] = useState(TopProducts)
    const [activeIndex, setActiveIndex ] = useState(0)

    
    
    useEffect(() => {
      const lastIndex = topProductsData.length - 1
      if(activeIndex < 0 ) {
        setActiveIndex(lastIndex)
      }
      if(activeIndex > lastIndex ) {
        setActiveIndex(0)
      }
           
    }, [activeIndex,topProductsData])


    useEffect(() => {
      let autoSlide = setInterval(() => {
         setActiveIndex(activeIndex + 1)
      }, 3000);
      return () => clearInterval(autoSlide)
    }, [activeIndex])
    

    const { setShowModel, setModelProduct } =  useContext(CartData)

    function showProductDetails(event, productdetails) {
      if(event.target.className !== "add-to-cart-btn"){
        setModelProduct(productdetails)
        setShowModel(true)
      }
     }


  return (
    <div className={isDarkMode ? "dark hero-section" : "hero-section"}> 
     <div className={'topLeftRightIcons'}>
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

        return  <div className={`hero-section-details ${productPosition}`} key={productItem.title} onClick={(event) => showProductDetails(event,productItem)}>
         
         <div className="hero-section-left">
            <img src={productItem.image} alt={productItem.title} className ="top-product-image"></img> 
         </div>
         <div className="hero-section-right">
              <h2 className='top-product-title'>{productItem.title}</h2>
         </div>
       </div>
      })
    }
    {/* bottom dots */}
     <div className={'dots'}>
      {topProductsData.map((DotItem, DotIndex) => {
        let activeDotClass  = 'dot'
        if(activeIndex === DotIndex) {
          activeDotClass = "dot active-dot"
        }
        return <div className={activeDotClass} key={DotItem.title}></div>
      } )}
     </div>

    </div>
  )
}

export default HeroSection