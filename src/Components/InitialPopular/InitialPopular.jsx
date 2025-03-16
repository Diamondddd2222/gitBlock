import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { FaStar, FaPlus, FaRegEye } from 'react-icons/fa'
import './InitialPopular.css'


const InitialPopular = () => {
  const [movies, setMovies] = useState([]);


  const API_KEY= "228ccf93dcd968ff82c2da22f88d4dca";
  const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500";


useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data)=> setMovies(data.results.slice(0, 6)))

    }, []);
  

     // Generate link for Movie trailer 
   const playTrailer = ({original_title}) => {
    if (!original_title){
      console.error("No title found for this movie.")
      return;
    }
      const query = encodeURIComponent(`${original_title} official trailer`);
      const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`;
      window.open(youtubeUrl, "_blank");
   }




    return (
      <div className='popular-content'>
        <div className='popular-container'>
          <h3 className='popular-Text'>#Popular 🔥</h3>
          <Link to='/Popular' className='popular-navigator'>VIEW ALL <SlArrowRight size={7}/></Link>
        </div>
       
       <div className="popular-section">
         {movies.map(movie =>(
          <div key={movie.id} className="PopularMovie">
             <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" className='Popular-img-section-path' />
             <div className="Popular-movie-info">
               <button className='Popular-watchlist-button'><FaPlus size={10}/>WatchList</button>
               <button onClick={()=> playTrailer(movie)} className='Popular-view-button'><FaRegEye size={10} />  View</button>
             </div>
  
             <div className="Popular-movie-ratings">
               <span className='Popular-movie-title'>{movie.title}</span>
               <span className='Popular-movie-rating'><FaStar fill='yellow' size={6} />{movie.vote_average}/10</span>
             </div>
          </div>
         ))}
       </div> 
      </div>
    
  )
}

export default InitialPopular