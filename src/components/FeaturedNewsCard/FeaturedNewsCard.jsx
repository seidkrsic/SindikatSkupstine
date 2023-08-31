import React, { useContext, useEffect, useState } from 'react'
import "./FeaturedNewsCard.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AuthContext from '../../Context/AuthContext'


const FeaturedNewsCard = ({url, title, date, id, title_cyrillic}) => {
    
    const {lang} = useContext(AuthContext)
    const [IsHovered, setIsHovered] = useState(false)
    const ToggleHover = (boolean) => { 
        setIsHovered(boolean)
    }

   

    


  return (
            <Link   onMouseEnter={() => ToggleHover(true)} 
                    onMouseLeave={() => ToggleHover(false)}
                    className='FeaturesNewsCard__container'
                    to={"/news/" + id}
                >
                <div className='FeaturesNewsCard__img-container'>
                    <motion.img animate={{scale: IsHovered? 1.008 : 1}} src={url} alt="img" />
                </div>
                <div className='FeaturesNewsCard__info-container'>
                    <h1>{lang === "latin" ? title: title_cyrillic}</h1>
                    <p>{date}</p>
                </div>
                
            </Link>
 
  )
}

export default FeaturedNewsCard