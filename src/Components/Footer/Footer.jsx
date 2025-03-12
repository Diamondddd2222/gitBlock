import React from 'react'
import { MdLocalMovies } from "react-icons/md";
import { SlArrowRight } from 'react-icons/sl'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-content'>

<div className="footer-first-section">
  <div className="footer-first-section-nth">
     <MdLocalMovies size={65} className='logo'/>
      <div className="footer-LT">
       <div className="footer-logo-texts">
         <span className='color-white'>BLOCK</span>
         <span className='color-white'>BUSTER</span>
       </div>

       <div className="footer-logo-title">
        <span className='footer-small-font color-white'>Films catalogue</span>
       </div>
      </div>
  </div>

  <div className="footer-text-contact">
       <span className='color-white light-text'>7th Hale end, plateau <br />
                                 Silicon Valley, NY 12028
       </span><br /><br />
       <span className='contact color-white light-text'>Call us: (+234)7010909982</span>
  </div>
    
</div>
  

<div className="footer-second-section">
     <h4 className='account-text color-white'>Account</h4>
     <span className='my-account-text color-white light-text'>My Account</span>
     <span className='watchlist-footer color-white light-text'>Watchlist</span>
</div>


<div className="footer-third-section">
     <h4 className='account-text color-white'> Newsletter</h4>
     <span className='color-white light-text' >Subscribe to our newsletter <br />
           now to get latest news from <br /> us. <br />
     </span><br />
     <span><input type="email" placeholder='Enter your email...'/></span><br /><br />
     <span className='color-purple light-text'>Subscibe Now! <SlArrowRight size={7}/></span>
</div>

</div>

  <div className='footer-reserved'>
    <span className='reserved-span color-white lighter-text '>© 2025 Blockbuster. All Rights Reserved.</span>
  </div>
    </div>
    
   
  )
}

export default Footer