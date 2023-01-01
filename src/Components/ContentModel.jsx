import React from 'react'
import { useContext } from 'react'
import { CartData } from '../Context'

const ContentModel = () => {
    const {  showModel, setShowModel, modelProduct, setModelProduct } =  useContext(CartData)

    function closeModel(e) {
        if(e.target.className === 'contentmodel show-model'){
            setModelProduct('')
            setShowModel(false)
        }
    }

  return (
    <div className={showModel ? 'contentmodel show-model' : 'contentmodel'} onClick={(e) => closeModel(e)} >
        <div className='details-model-div'>
            <div className="model-image-div">
             <img className='model-product-image' src={modelProduct.image} alt={modelProduct.title}></img>
            </div>
            <div className="model-info-div">
             <p><span className='bold-me'>Product :</span> {modelProduct.title}</p>
             <p><span className='bold-me'>Price :</span> ${modelProduct.price}</p>
             <p><span className='bold-me'>Category:</span> {modelProduct.category}</p> 
            </div>
        </div>
    </div>
  )
}

export default ContentModel