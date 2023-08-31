import React, { useState, useEffect, useContext } from 'react'
import "./ImageSlider.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import AuthContext from '../../Context/AuthContext'

const ImageSlider = ({slides}) => {

    

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const {lang} = useContext(AuthContext)


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

    useEffect(() => {
        // Auto slide every 5 seconds
        const intervalId = setInterval(() => {
            onToNext();
        }, 5000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]); 



  return (
  
    <motion.div onMouseEnter={showArrows} onMouseLeave={hideArrows}  className='ImageSlider__container'>
        
        <motion.div className={'ImageSlider__container-Image'}
                    key={currentIndex}
                    initial={{ offsetX: currentIndex % 2 === 0 ? -100 : 100, opacity: .8}}
                    animate={{ x: 0, opacity: 1, animationDuration: 2}}
                    transition={{ duration: 3 }}> 

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



                    <img src={`${slides[currentIndex]?.image_url}`} alt="slideImg" />
                    
                   
                    <Link to={"/news/"+slides[currentIndex]?.id} className='NewInfo'>
                        <h1>{ lang === "latin" ? slides[currentIndex]?.title : slides[currentIndex]?.title_cyrillic  }</h1> 
                        { lang === "latin" ? parse(String(slides[currentIndex]?.content)): parse(String(slides[currentIndex]?.content_cyrillic)) }
                    </Link> 
                    
                    
                  
        </motion.div>

       
        
       


        
    </motion.div>
    
    
        
    
  )
}

export default ImageSlider