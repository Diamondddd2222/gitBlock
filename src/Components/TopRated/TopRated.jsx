import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaStar, FaPlus, FaRegEye } from 'react-icons/fa'
import { SlArrowRight } from 'react-icons/sl'
import "./TopRated.css"


const TopRated = () => {
  const [movies, setMovies] = useState([]);
  
  const API_KEY= "228ccf93dcd968ff82c2da22f88d4dca";
  const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500";



  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data)=> setMovies(data.results.slice(0,5)));

  }, []);

  return (
    <div className='topMovie-container'>
      <div className='TopMovieText-container'>
        <h3 className='TopMovie-Text'>#Top Rated🔥</h3>
        <Link to='/Home/TopRatedPage' className='popular-navigator'>VIEW ALL <SlArrowRight size={7}/></Link>
      </div>
     
     <div className="topMovie-section">
       {movies.map(movie =>(
        <div key={movie.id} className="topMovie">
           <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" className='Top-img-section-path' />
           <div className="movie-info">
             <button className='Top-watchlist-button'><FaPlus size={8}/>WatchList</button>
             <button className='Top-view-button'><FaRegEye size={10}/>  View</button>
           </div>

           <div className="movie-ratings">
             <span className='Top-movie-title'>{movie.title}</span>
             <span className='Top-movie-rating'><FaStar fill='yellow' size={6} />{movie.vote_average}/10</span>
           </div>
        </div>
       ))}
     </div> 
    </div>
  )
}

export default TopRated

