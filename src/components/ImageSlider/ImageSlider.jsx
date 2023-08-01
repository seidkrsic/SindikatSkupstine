import React, { useState, useEffect } from 'react'
import "./ImageSlider.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const showArrows = () => { 
        setIsHovered(true)
 
    }

    const hideArrows = () => { 
        setIsHovered(false)

    }

    const onToPrevious = () => { 
        const isFirstIndex = currentIndex === 0
        const newIndex = isFirstIndex? slides.length - 1 : currentIndex-1
        setCurrentIndex(newIndex)

    }

    const onToNext = () => { 
        const isLastIndex = currentIndex === slides.length - 1
        const newIndex = isLastIndex? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }



  return (
  
    <motion.div onMouseEnter={showArrows} onMouseLeave={hideArrows}  className='ImageSlider__container'>
        
        <motion.div className='ImageSlider__container-Image' 
                    key={currentIndex}
                    initial={{ opacity: .8}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ duration: 1 }}> 

                    <motion.div 
                                initial={{ opacity: 0, y: -20 }} 
                                animate={{opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20,}} 
                                style={{opacity: isHovered? 1 : 0 }}  
                                transition={{ duration: 0.5 }}
                                onClick={onToPrevious}
                                className='leftArrow'>❮</motion.div>
                    <motion.div 
                                initial={{ opacity: 0, y: -20 }} 
                                animate={{opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20,}} 
                                style={{opacity: isHovered? 1 : 0 }}  
                                transition={{ duration: 0.5 }}
                                onClick={onToNext}
                                className='rightArrow'>❯</motion.div>



                    <img src={`${slides[currentIndex].url}`} alt="slideImg" />
                    <Link className='NewInfo'>
                        <h1>{slides[currentIndex].title.length>50? slides[currentIndex].title.slice(0,50)+"...": slides[currentIndex].title}</h1>
                        {document.documentElement.clientWidth>767? 

                        <p>{slides[currentIndex].info.length>200? slides[currentIndex].info.slice(0,200)+"..." : slides[currentIndex].info }</p>
                            :
                        <p>{slides[currentIndex].info.length>80? slides[currentIndex].info.slice(0,80)+"..." : slides[currentIndex].info }</p>

                        }
                    </Link>
                  
        </motion.div>

       
        
       


        
    </motion.div>
    
    
        
    
  )
}

export default ImageSlider