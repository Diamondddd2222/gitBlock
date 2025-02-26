import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Popular from './Pages/Popular/Popular'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
             <Route path='Home' element={<Home/>}/>
             <Route path='/Popular' element={<Popular/>}/>
             
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
