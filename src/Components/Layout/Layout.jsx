import React from 'react'
import {Outlet, useLocation, Navigate} from 'react-router-dom'  
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css'

const Layout = () => {
    const {pathname}= useLocation();

  return (

    <div className="main">
     {pathname==="/" && <Navigate to='Home'/> }
        <div className="header">
           <Header/>
        </div>

        <div className="outlet">
          <Outlet/>
        </div>


        <div className="footer">
            <Footer/>
        </div>
        
    </div>
    
   
    
  )
}

export default Layout