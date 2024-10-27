import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'

function Banner({fetchUrl}) {
    const [movie,setMovie] = useState('')
    const base_url = "https://image.tmdb.org/t/p/original/";

    const getMovie = async()=>{
       const {data} = await tmdbAxiosInstance.get(fetchUrl) 
       console.log(data.results[Math.floor(Math.random()*data.results.length)]);
       setMovie(data.results[Math.floor(Math.random()*data.results.length)])
    }

    useEffect(()=>{
        getMovie()
    },[])
    console.log(movie);
    
  return (
    <div style={{
        backgroundImage : `url(${base_url}/${movie?.backdrop_path})`,
        width: '100%',
        height: '600px',
        backgroundSize: 'cover'
    }}>
      <div style={{padding:'350px 100px'}}>
      <h1 style={{color:'white'}} >{movie?.title}</h1> 
      <p style={{color:'white'}}>{movie?.overview}</p>
      </div>
      
    </div>
  )
}

export default Banner