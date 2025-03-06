import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaPlus, FaRegEye } from 'react-icons/fa'
import { SlArrowRight } from 'react-icons/sl'
import './ComingSoonComp.css'

const ComingSoonComp = () => {
    const [movies, setMovies] = useState([])

    const API_KEY= "228ccf93dcd968ff82c2da22f88d4dca";
    const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500";


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data)=> setMovies(data.results.slice(0, 5)))

    }, []);


    return (
        <div className='comingSoon-container'>
          <div className='comingSoonText-container'>
            <h3 className='comingSoon-Text'>#Coming Soon To Cinemas🔥</h3>
            <Link to='/Home/ComingSoonPage' className='popular-navigator'>VIEW ALL <SlArrowRight size={7}/></Link>
          </div>
         
         <div className="comingSoon-section">
           {movies.map(movie =>(
            <div key={movie.id} className="comingSoonMovie">
               <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" className='comingSoon-img-section-path' />
               <div className="comingSoon-info">
                 <button className='comingSoon-watchlist-button'><FaPlus size={8}/>WatchList</button>
                 <button className='comingSoon-view-button'><FaRegEye size={10}/>  View</button>
               </div>
    
               <div className="comingSoon-ratings">
                 <span className='comingSoon-movie-title'>{movie.title}</span>
                 <span className='comingSoon-movie-rating'><FaStar fill='yellow' size={6} />{movie.vote_average}/10</span>
               </div>
            </div>
           ))}
         </div> 
        </div>
      )
}

export default ComingSoonComp