import React, { useEffect, useState } from 'react'
import "./FeaturedNewsCard.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const FeaturedNewsCard = ({url, title, date}) => {
    
    const [IsHovered, setIsHovered] = useState(false)
    const ToggleHover = (boolean) => { 
        setIsHovered(boolean)
    }

   

    


  return (
    <div    onMouseEnter={() => ToggleHover(true)} 
            onMouseLeave={() => ToggleHover(false)}
            className='FeaturesNewsCard__container'
        >
        <div className='FeaturesNewsCard__img-container'>
            <motion.img animate={{scale: IsHovered? 1.008 : 1}} src={url} alt="img" />
        </div>
        <div className='FeaturesNewsCard__info-container'>
            <h1>{title}</h1>
            <p>{date}</p>
        </div>
        
    </div>
  )
}

export default FeaturedNewsCard