import React, { createContext, useState } from 'react'


export const CartData = createContext()

const Context = ({children}) => {

const [cartProducts, setCartProducts] = useState([])
const [isDarkMode, setIsDarkMode] = useState(false)
const [products , setProducts] = useState([])
const [searchData, setSearchData] = useState('')
const [showModel, setShowModel] = useState(false)
const [modelProduct, setModelProduct] = useState('')
const [showHeroSection, setShowHeroSection] = useState(true)


  return (
    <CartData.Provider value={{cartProducts, setCartProducts, isDarkMode, setIsDarkMode, products, setProducts, searchData, setSearchData, showModel, setShowModel, modelProduct, setModelProduct, showHeroSection, setShowHeroSection}}>
        {children}
    </CartData.Provider>
  )
}

export default Context