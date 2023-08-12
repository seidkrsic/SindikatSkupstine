import React from 'react'
import "../HeaderPhoto/HeaderPhoto.css"
import rainbow_bridge from "../../images/rainbow-bridge.jpg"
import { useLocation } from 'react-router-dom'



const HeaderPhoto = () => {

    const page_name = useLocation().state
    
  return (
    <div className='HeaderPhoto__container'> 
        <img src={rainbow_bridge} alt="logo" />
        <div className='HeaderPhoto__view-name__container'>
                <h1>{page_name}</h1>
        </div>
    </div>
  )
}

export default HeaderPhoto