import React, { useEffect, useState} from 'react'
import { data, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { movieTrailers  } from '../../utils/data'
import './Theatre.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const Theatre = ({VideoId}) => {
  const defaultMovie = movieTrailers[0]
 
  const [trailerUrl, setTrailerUrl] = useState(defaultMovie?.VideoId?`https://www.youtube.com/embed/${defaultMovie.VideoId}` : "")


 // function to generate youtube search url
const generateYouTubeLink = (VideoId) => {
  return `https://www.youtube.com/embed/${VideoId}`
}

// function to update ReactPlayer
const playTrailer= (VideoId)  =>{
  setTrailerUrl(generateYouTubeLink(VideoId));
}


const settings = {
  vertical:true,
  verticalSwiping: true,
  slidesToshow: 4,
  arrows: true,
  infinite: false,
  autoplay: false,
}


  return (
   
    <div className='theater-content'>

      <div className="theater-container">
       <h3 className='theater-Text'>#IN THEATRE 🔥</h3>
      </div>

      <div className="theater-section">
        {trailerUrl && <iframe
                         width="60%"
                         height='350px' 
                         src={trailerUrl}
                         title='Youtube video player'
                         frameBorder="1"
                         allow='accelerometer; autoplay; clipboard-write; encryted-media; gyroscope; picture-in-picture'
                         allowFullScreen
                       />}

       <div className="movieList-Text">
         <Slider {...settings} className='slider'>
          {movieTrailers.map((movie, index) => (
            <h2 key={index}   className='moviesText'> <a href={generateYouTubeLink(movie.VideoId)} 
            onClick={(e) => {e.preventDefault(); playTrailer(movie.VideoId)}} 
            target='_blank' rel='noopener noreferrer'
            className='Theatremovie-Text'>{movie.Title}</a>
            </h2>   
         ))}
        </Slider>
        
         
            
       </div>
      </div>  
    </div>
  )


}



  export default Theatre




  /*
    const [movies, setMovies]= useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const [error, setError] = useState(null)

    useEffect( ()=>{ 
       //Fetch popular movies
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
       .then((response)=> response.json())
       .then((data)=> {
        setMovies(data.results)})
   

}, []);


// Function to fetch trailer for a movie
 
    const generateYouTubeLink = (title)=> {
  
        return `https://www.youtube.com/ytsearch:${title} official trailer`;
    };

// Function to update ReactPlayer with the clicked movie

    const playTrailer = (title) => {
      const url = `https://www.youtube.com/ytsearch:${title} official trailer`;
      setTrailerUrl(url)
    }       

        return (
            <div style={{display: "block", justifyContent: 'center', marginTop: '20px'}}>
              {trailerUrl && <ReactPlayer controls url ={trailerUrl}/>}
              <h2>Popular Movies</h2>
        
              {movies.map((movie)=>(
               <div key={movie.id}>
              
            </div>
         );
    }
*/
