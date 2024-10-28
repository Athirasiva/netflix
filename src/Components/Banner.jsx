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
    
  return (
    <div style={{
        backgroundImage : `url(${base_url}/${movie?.backdrop_path})`,
        width: '100%',
        height: '600px',
        backgroundSize: 'cover'
    }}>
       <h5 style={{color:'white'}}>{movie?.title}</h5> 
    </div>
  )
}

export default Banner