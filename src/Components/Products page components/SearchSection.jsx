import React from 'react'
import { useState, useContext } from 'react'
import { CartData } from '../../Context'
import {  BsSearch  } from "react-icons/bs";

const SearchSection = () => {

  const [showSearch, setShowSearch] = useState(false)
  const { setSearchData }= useContext(CartData)

  function inputCangeHandler(event) {
    let value = event.target.value
    setSearchData(value)
    
  }  


  return (
    <div className='searchSection' style={{padding :'1rem'}}>

    <div className='search'>

          <form onSubmit={(event) => event.preventDefault() } style={{ border:'none', margin:'auto',width:'fitcontent'}}>

            <input type='text' style={{width:'60%', padding:'10px 20px', fontSize:'1.4rem'}} placeholder='search products here...' className={showSearch ? 'search-input show-search' : 'search-input'}  onChange={(event) => inputCangeHandler(event)}></input>

            <BsSearch className='searchIcon' onClick={()=> setShowSearch(!showSearch)}/>

         </form> 
  </div> 
</div>
  )
}

export default SearchSection