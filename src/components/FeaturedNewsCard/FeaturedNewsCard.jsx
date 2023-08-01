import React, { useEffect, useState } from 'react'
import "./FeaturedNewsCard.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const FeaturedNewsCard = ({url, title, info}) => {
    
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
            <p>{info}</p>
        </div>
        <div className='FeaturesNewsCard__link-container'>
            <motion.div 
                        animate={{scale: IsHovered? [1,.5,1] : 1}} 
                        transition={{duration: .2}}
                        className="FeaturesNewsCard__button-container"
                        >
            <Link style={{ backgroundColor: IsHovered? "#a67c00" : "white", color: !IsHovered? "#a67c00" : "white",}}  
                  to="">Read More</Link>
            </motion.div>
            
        </div>
    </div>
  )
}

export default FeaturedNewsCard