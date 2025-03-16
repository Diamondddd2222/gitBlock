import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import InitialPopular from '../../Components/InitialPopular/InitialPopular'
import TopRated from '../../Components/TopRated/TopRated'
import ComingSoonComp from '../../Components/ComingSoonComp/ComingSoonComp'
import Theatre from '../../Components/Theatre/Theatre'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
     <HeroSection />
     <InitialPopular/>
     <TopRated />
     <ComingSoonComp />
     <Theatre/>
    </div>
  )
}

export default Home