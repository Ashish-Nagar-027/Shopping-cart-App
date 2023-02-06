import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>

      <form className='contact-form' action="https://formspree.io/f/mrgvpzqv" method="POST">
         <input 
         name='Name' 
         type='text' 
         placeholder='Enter Your Name' 
         required 
         />
             
         <input 
         name='Email' 
         type='text' 
         placeholder='Enter Your Email'  
         required 
         />

         <textarea 
         name='Message'
         placeholder='Enter Your Message' 
         required />
         
         <input name='Name' 
         type='submit' 
         placeholder='Enter Your Name' 
         />

       </form>
      </div>
  )
}

export default Contact