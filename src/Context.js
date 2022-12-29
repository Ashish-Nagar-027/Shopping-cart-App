import React, { createContext, useState } from 'react'


export const CartData = createContext()

const Context = ({children}) => {

const [cartProducts, setCartProducts] = useState([])
const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <CartData.Provider value={{cartProducts, setCartProducts, isDarkMode, setIsDarkMode}}>
        {children}
    </CartData.Provider>
  )
}

export default Context