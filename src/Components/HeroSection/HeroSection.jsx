import React from 'react'
import './HeroSection.css'
import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css'
import axios from 'axios'
import { FaHeart, FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { sliderSettings } from '../../utils/common'
import { SlArrowLeft, SlArrowRight} from "react-icons/sl";


const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]= useState(null)

  const API_KEY= "228ccf93dcd968ff82c2da22f88d4dca";
  const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500";



  useEffect(()=>{
    const fetchMovies = async()=>{
        
        let allMovies=[];

        try{
            const response= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            if (response.data){
                console.log(response.data)
             allMovies=[...allMovies, ...response.data.results];
            }
                setMovies(allMovies);
            } catch(err){
                setError("Failed to fetch Movies");
            }finally{
                setLoading(false);
            }
        }
        
    
     fetchMovies();
    },[]); 
   
  
    return (
        <div className="hero-section">
            
<Swiper {...sliderSettings} modules={[Autoplay, Navigation, Pagination]}>
        <SliderButton/>
               {
                  movies.map((movie, i) =>(
                    <div className="M-container" key={movie?.id}>
                    <SwiperSlide key={movie?.id}>
                      <div className="movie-container">

{/*left container */}
   <div className="movie desp">
     <h1 className='movie-title'>{movie.original_title}</h1>

     <div className="movie-buttons">
      <div className="watchList">
       <button className="add-to-watchList-button"><FaHeart className='watchList-icon' size={15} /> </button>
       <h3 className='watchList-text'>ADD TO WATCHLIST</h3>
      </div>
       
      <div className="watch-trailer">
       <button className="watch-trailer-button" ><FaPlay className='watch-trailer-icon' size={15} /></button>
       <h3 className="watch-trailer-text">WATCH TRAILER</h3>
      </div>  
     </div>

     <div className="movie-ratings-items">
        <span className='rating1st-white'><FaStar fill='yellow' size={10} /> {movie.vote_average}/10</span>
        <span className='rating1st'>Rating:For all</span>
        <span  className='rating1st'>Release: {movie.release_date}</span>
     </div>

     <button className="See-More">See More</button>
   </div>
{/*end of left container */}

{/*Right Container */}
   <div className="image-container">
     <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt="" className='img_path' />
   </div>
 
</div>
                     
                        
                    </SwiperSlide> 
                    </div>  
                 ))
                }
            </Swiper>
        </div>
     )
    

   
  
}

export default HeroSection 

const SliderButton =() => {
  const swiper = useSwiper();
  return(
    <div className='slide-button'>
   
        <div className="r-buttons2">
         <button className='prev' onClick={()=> swiper.slidePrev()}><SlArrowLeft  size={40}/></button>
        </div>

        <div className="r-buttons1">
         <button className='next' onClick={()=> swiper.slideNext()}><SlArrowRight  size={40}/></button>
        </div>
        
        
    </div>
    
  )
}