import React from "react";


const SingleProduct = ({product, cartProducts, setCartProducts }) => {
     
  
    function editedTitle(title) {
        if (title.length > 30 ) {
          return title.slice(0,30) + ' ...'
        }
        else {
          return title
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
        <div className='product-box' key={product.id}>
        <img src={product.image} className='product-img' alt={product.name}></img>
        <div className="product-details">
          <p>{editedTitle(product.title)}</p>
          <p>Price : ${product.price}</p>
        </div>
        
        {
          cartProducts.includes(product) ?
          <button className='add-to-cart-btn' onClick={()=> setCartproductsfunction(product)} >
               Remove From Cart
          </button> :
           <button className='add-to-cart-btn' onClick={()=> setCartproductsfunction(product)} >
           Add to Cart
          </button> 
        }
        </div>

    )
}

export default SingleProduct