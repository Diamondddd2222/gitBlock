import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Popular from './Pages/Popular/Popular'
import TopRatedPage from './Pages/TopRatedPage/TopRatedPage'
import ComingSoonPage from './Pages/ComingSoonPage/ComingSoonPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
             <Route path='Home' element={<Home/>}/>
             <Route path='Home/Popular' element={<Popular/>}/>  
             <Route path='Home/TopRatedPage' element={<TopRatedPage/>}/>
             <Route path='Home/ComingSoonPage' element={<ComingSoonPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
