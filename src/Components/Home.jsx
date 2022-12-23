import React from 'react'

const Home = () => {

  // https://fakestoreapi.com/products
  function getProducts(){
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=>console.log(json))
  }
  getProducts()
  
  return (
    <div>Home</div>
  )
}

export default Home