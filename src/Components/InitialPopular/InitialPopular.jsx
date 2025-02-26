import React from 'react'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import './InitialPopular.css'


const InitialPopular = () => {
  return (
    <div className="popular-content">
        <div className='popularText-container'>
          <h3 className='popular-Text'>#Popular Now</h3>
          <Link to='/Popular' className='popular-navigator'>View all<SlArrowRight size={10}/></Link>
        </div>
 

    </div>
    






  )
}

export default InitialPopular