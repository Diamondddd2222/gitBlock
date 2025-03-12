import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShareAlt, FaStar , FaPlus,FaRegEye} from "react-icons/fa";
import ReactStars from "react-stars"
import "./MoreDetailsPage.css"


const MoreDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [movies, setMovies]= useState ([])
    const [rating, setRating] = useState(0)
    const API_KEY= "228ccf93dcd968ff82c2da22f88d4dca";
    const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500";
  
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data)=> setMovie(data));
      console.log(setMovie)
    }, [id]); 
   

    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data)=> setMovies(data.results));
  
    }, []);

   
  // Function for Rating movies
    const handleRating =(newRating) => {
        setRating(newRating);
    }


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
     <div className="MoreDetails-section">
        <div className="MoreDetails-container">

          {/**First Section IMAGE */}
             <div className="MoreDetails-imagesection">
               <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" className='moreDetais-img-section-path' />
               <div className="moreDetail-button">
                 <button  onClick={()=> playTrailer(movie)}  className="watchTrailer"><FaPlay size={15} />   WATCH TRAILER</button>
                 <button className="buyTicket"><FaCreditCard size={15} />   BUY TICKET</button>
               </div> 
             </div>

         
         {/** Second Section MOVIE DETAILS */}
         
         <div className="MoreDetails-movieDetails">
            <h2 className='moreDetails-movieTitle'>{movie.original_title}</h2>
            <span className='moreDetails-movieReleasedate' >{movie.release_date}</span>


           <div className="shareButtons">
             <div className="shareButtons-Heart">
                <button className="heart"><FaHeart size={15} fill='rgb(226, 21, 55)'/></button>
                <h2 className='text-watchList'> ADD TO WATCHLISH</h2>
             </div>

             <div className="shareButtons-share">
               <button className="heart"><FaShareAlt size={15} fill='rgb(226, 21, 55)' /></button>
               <h2 className='text-share'> SHARE</h2>
             </div>
           </div>

           <div className="ratingsMovie">
              <span className='MovieDetails-movie-rating'><FaStar fill='yellow' size={6} />{movie.vote_average}/10</span>
              <span className='rate-text' >Rating: For all</span>
              <div className="ratings">
                <span className='rate-text'>Rate this movie: {rating}</span>
                <ReactStars
                  count={5}
                  onChange={handleRating}
                  size={25}
                  activeColor='#ffd700'
                /> 
              </div>
           </div>
            
           <div className="movieIMG">
            <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt="" className='moreDetais-img-backdrop-path' />
            <span className='overview-text'>{movie.overview}</span>
           </div>  
         </div>
        </div>



      <div className='LikeMovie-container'>
        <div className='LikeMovieText-container'>
          <h3 className='TopMovie-Text'>#Movies You May Like🔥</h3>
        </div>
     
        <div className="LikeMovie-section">
           {movies.map(movie =>(
            <div key={movie.id} className="topMovie">
              <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt="" className='Top-img-section-path' />
              <div className="movie-info">
                <button className='Top-watchlist-button'><FaPlus size={8}/>WatchList</button>
                <button onClick={()=> playTrailer(movie)} className='Top-view-button'><FaRegEye size={10}/>  View</button>
              </div>

              <div className="movie-ratings">
                <span className='Top-movie-title'>{movie.title}</span>
                <span className='Top-movie-rating'><FaStar fill='yellow' size={6} />{movie.vote_average}/10</span>
              </div>
            </div>
            ))}
        </div> 
      </div>
       



     </div>

      
          
  )
}

export default MoreDetailsPage