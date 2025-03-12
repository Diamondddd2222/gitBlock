import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FaRegEye, FaMinus } from 'react-icons/fa'
import { FaArrowLeft } from "react-icons/fa6";
import './WatchList.css'

const WatchList = () => {
  const {id} = useParams();
  const [watchList, setWatchList] = useState([])
  const [movies, setMovies] = useState()
  const API_KEY= "228ccf93dcd968ff82c2da22f88d4dca";
  const IMAGE_BASE_URL= "https://image.tmdb.org/t/p/w500";


  // useEffect for movie info from API
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data)=> setMovies(data.results));
    console.log(setMovies)
  }, [id]);


  // useEffect for add movie
  let newItem =[]
  useEffect(()=> {
    if (id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data)=> setWatchList( (prevList) => [...newItem,data ] ))
        alert ("Adding Movie to WatchList...")
    }
  }, [id]);

  return (
     <div className="watchList-container">
      {
        watchList ? 
        ( watchList.map((list, id) =>(
            <div key={list.id} className='watch-trueContainer'>
              <img src={`${IMAGE_BASE_URL}${list.poster_path}`} alt="" className='WatchListPage-img-section-path' />
              <div className="watchlistPage-buttons">
                <button className='WatchListPage-button'><FaArrowLeft size={8}/> Remove</button>
                <button className='WatchListPage-button2' onClick={()=> playTrailer(movies)}><FaRegEye size={10}/>  View</button>
              </div>   
            </div>
        ))
            
        )
        :

        <div>
           <p>No List</p>
        </div>
      }
     </div>
  )
}

export default WatchList