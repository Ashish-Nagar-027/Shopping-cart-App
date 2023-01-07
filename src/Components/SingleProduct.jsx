import React from "react";


const SingleProduct = ({product, cartProducts, setCartProducts, isDarkMode, showModel, setShowModel, modelProduct, setModelProduct}) => {
 
  // edit long tittle function
    function editedTitle(title) {
        if (title.length > 30 ) {
          return title.slice(0,30) + ' ...'
        }
        else {
          return title
        }
       }
        
      //  Add to cart function
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


      //  show model function
       function showProductDetails(event, productdetails) {
        if(event.target.className !== "add-to-cart-btn"){
          setModelProduct(productdetails)
          setShowModel(true)
        }
       }

       
    return (
        <div className={isDarkMode ? "product-box dark-product-box" : "product-box" } key={product.id} onClick={(event) => showProductDetails(event ,product)}>
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