import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Row.css'

function Row({title,fetchUrl,isPoster}) {
  const [rowMovies, setRowMovies] = useState('')
  const base_url = "https://image.tmdb.org/t/p/original/";

  const getrow = async()=>{    
    const {data} = await tmdbAxiosInstance.get(fetchUrl)    
    setRowMovies(data.results)
   }

   useEffect(()=>{    
    getrow()
   },[])
 console.log(rowMovies);
 
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <div className='movie-row'>
        {
          rowMovies.length >0 ?
          rowMovies.map((movie,index)=>(
            <img src={`${base_url}/${isPoster ? movie.poster_path:movie.backdrop_path}`} alt={movie.original_title} className='movie' />
          )) :""
        }
      </div>
    </div>
  )
}

export default Row