import React, { createContext, useState } from 'react'


export const CartData = createContext()

const Context = ({children}) => {

const [cartProducts, setCartProducts] = useState([])


  return (
    <CartData.Provider value={{cartProducts, setCartProducts}}>
        {children}
    </CartData.Provider>
  )
}

export default Context