import React, { useEffect, useState } from 'react'
import './NavigationBar.css'
function NavigationBar() {
  const [show,setShow] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 600){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  },[])
 
  return (
    <div>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"  alt=""  className={`${show && 'nav-show'}navigation-bar`}/>
    </div>
  )
}

export default NavigationBar