import React from 'react'
import { useContext } from 'react'
import { CartData } from '../Context'

const ContentModel = () => {
    const {  showModel, setShowModel, modelProduct, setModelProduct } =  useContext(CartData)

     console.log(modelProduct);
    function closeModel(e) {
        if(e.target.className !== 'details-model-div'){
            setModelProduct('')
            setShowModel(false)
        }
    }

  return (
    <div className={showModel ? 'contentmodel show-model' : 'contentmodel'} onClick={(e) => closeModel(e)} >
        <div className='details-model-div'>
            <img className='model-product-image' src={modelProduct.image} alt={modelProduct.title}></img>
            <p>{modelProduct.title}</p>
            <p>{modelProduct.price}</p>
            <p>{modelProduct.category}</p> 
        </div>
    </div>
  )
}

export default ContentModel