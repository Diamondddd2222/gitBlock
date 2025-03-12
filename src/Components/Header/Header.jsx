import React from 'react'
import { MdLocalMovies } from "react-icons/md";
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className='header-container'>
       <div className="logo-container">

        <div className="logo-text">
          <MdLocalMovies  className='logo'/>

          <div className="LT">
           <div className="logo-texts">
             <span>BLOCK</span>
             <span>BUSTER</span>
           </div>

           <div className="logo-title">
            <span className='small-font'>Films catalogue</span>
           </div>
          </div>  
        </div>

        <div className="hamburger-bottom">
          <GiHamburgerMenu size={30} className='hamburger'/>
        </div>


       </div>
    </div>
  )
}

export default Header
