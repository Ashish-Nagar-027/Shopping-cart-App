import React from 'react'


const Footer = () => {
   function getDate() {
    let date = new Date().getFullYear()
    return date
   }
   

  return (
    <div className='footer'>
        <p>	&#169; <a href="https://ashish-nagar.netlify.app/">{getDate()} Ashish Nagar || All Right Reserved</a></p>
    </div>
  )
}

export default Footer