import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HomePageFooter = () => {
  return (
    <div className='HomePageFooter'>
        <div>
            <p>Your-Cart</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div>
            <p>Follow Us</p>
            <div className='social-icons-container'>
                <FaTwitter  />
                <FaDiscord />
                <FaYoutube />
                <FaInstagram />
            </div>
        </div>
        <div>
            <p>Need Help </p>
            <p>call Now <span> +123458394</span></p>
        </div>
    </div>
  )
}

export default HomePageFooter