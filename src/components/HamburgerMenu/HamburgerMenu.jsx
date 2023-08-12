import React from 'react'
import "../HamburgerMenu/HamburgerMenu.css"
import openMenu from "../../images/openMenu.png"
import closeMenu from "../../images/closeMenu.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const HamburgerMenu = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false)
    const handleisMenuOpen = () => setisMenuOpen(!isMenuOpen)

  return (
    <div className={'HamburgerMenu__container transparent'}>
        <div className='HamburgerMenu__img-container' onClick={handleisMenuOpen}>
            <img src={ !isMenuOpen? openMenu : closeMenu} alt="" />
        </div>
        <motion.ul 
            animate={{height: isMenuOpen? "300px" : 0, transition: 2, animationDelay: 1}}
            className={ isMenuOpen ? 'HamburgerMenu__links-container HamburgerMenu__container-bg__color' : 'HamburgerMenu__links-container hidden'}>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0, transition: 2, animationDelay: 2}}>
                <Link>Aktuelnosti</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0, transition: 2, animationDelay: 3}}>
                <Link>Sindikat</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0, transition: 2, animationDelay: 4}}>
                <Link>Sjednice</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0, transition: 2, animationDelay: 5}}>
                <Link>Zakoni</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0, transition: 2, animationDelay: 6}}>
                <Link>Pogodnosti</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0, transition: 2}}>
                <Link>Kontakt</Link>
            </motion.li>
        </motion.ul>
             
    </div>
  )
}

export default HamburgerMenu