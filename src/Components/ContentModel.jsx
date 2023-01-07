import React from 'react'
import { useContext } from 'react'
import { CartData } from '../Context'
import { ImCross } from "react-icons/im";


const ContentModel = () => {

    const { cartProducts, setCartProducts, showModel, setShowModel, modelProduct, setModelProduct } =  useContext(CartData)
       

    function closeModel(e) {
        if(e.target.className==='contentmodel show-model' ||e.target.className=== 'model-cancel' || e.target.tagName === 'svg' || e.target.tagName === 'path'){
            setModelProduct('')
            setShowModel(false)
        }
    }

    function setCartproductsfunction(product) {
        let itemAlreadyInCart = false
        if(cartProducts.find((item) =>item.title === product.title)){
          itemAlreadyInCart = true;
        } 
        
        if(!itemAlreadyInCart) {
          setCartProducts([...cartProducts, product])
        }  

        if(itemAlreadyInCart) {
          setCartProducts(cartProducts.filter(item => item.title !== product.title))
        }  
       }

  return (
    <div className={showModel ? 'contentmodel show-model' : 'contentmodel'} onClick={(e) => closeModel(e)} >
        <div className='details-model-div' >
            <div className='model-cancel'  ><ImCross /></div>
            <div className="model-image-div">
             <img className='model-product-image' src={modelProduct.image} alt={modelProduct.title}></img>
            </div>
            <div className="model-info-div">
             <p><span className='bold-me'>Product :</span> {modelProduct.title}</p>
             <p><span className='bold-me'>Price :</span> ${modelProduct.price}</p>
             <p><span className='bold-me'>Category:</span> {modelProduct.category}</p> 
             {
          cartProducts.includes(modelProduct) ?
          <button className='add-to-cart-btn' onClick={()=> setCartproductsfunction(modelProduct)} >
               Remove From Cart
          </button> :
           <button className='add-to-cart-btn' onClick={()=> setCartproductsfunction(modelProduct)} >
           Add to Cart
          </button> 
        }
            </div>
        </div>
    </div>
  )
}

export default ContentModel