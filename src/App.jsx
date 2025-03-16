import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Popular from './Pages/Popular/Popular'
import TopRatedPage from './Pages/TopRatedPage/TopRatedPage'
import ComingSoonPage from './Pages/ComingSoonPage/ComingSoonPage'
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage'
import WatchList from './Pages/WatchListPage/WatchList'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <div className='app'>
      <div className="header">
         <Header/>
       </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Home/>} /> 
          </Route>
           
          <Route path='/Popular' element={<Popular/>}/> 
          <Route path='/TopRatedPage' element={<TopRatedPage/>}/>
          <Route path='/ComingSoonPage' element={<ComingSoonPage/>}/>
          <Route path='/movie/:id' element={<MoreDetailsPage/>}/>
          <Route path='/watchList/:id' element={<WatchList/>}/>
        </Routes>
      </BrowserRouter>

      
        <Footer/>
      
    </div>
  )
}

export default App
