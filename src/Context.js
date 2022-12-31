import React, { createContext, useState } from 'react'


export const CartData = createContext()

const Context = ({children}) => {

const [cartProducts, setCartProducts] = useState([])
const [isDarkMode, setIsDarkMode] = useState(false)
const [products , setProducts] = useState([])
const [searchData, setSearchData] = useState('')

  return (
    <CartData.Provider value={{cartProducts, setCartProducts, isDarkMode, setIsDarkMode, products, setProducts, searchData, setSearchData}}>
        {children}
    </CartData.Provider>
  )
}

export default Context