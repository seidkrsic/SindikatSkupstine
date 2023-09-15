import React, { useContext } from 'react'
import "../HamburgerMenu/HamburgerMenu.css"
import openMenu from "../../images/openMenu.png"
import closeMenu from "../../images/closeMenu.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AuthContext from '../../Context/AuthContext'
import userIcon from "../../images/user.png"



const HamburgerMenu = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false)
    const handleisMenuOpen = () => setisMenuOpen(!isMenuOpen)
    const {lang} = useContext(AuthContext) 
    const {user} = useContext(AuthContext) 
    const {userLogout} = useContext(AuthContext)

  return (
    <div className={'HamburgerMenu__container transparent'}>
        <div className='HamburgerMenu__img-container' onClick={handleisMenuOpen}>
            <img src={ !isMenuOpen? openMenu : closeMenu} alt="" />
        </div>
        <motion.ul 
            animate={{height: isMenuOpen? "400px" : 0, transition: 1, animationDelay: 5}}
            className={ isMenuOpen ? 'HamburgerMenu__links-container HamburgerMenu__container-bg__color' : 'HamburgerMenu__links-container hidden'}>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                <Link to="/news">Aktuelnosti</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                <Link to="/staff">Sindikat</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                <Link to="/session/skupstina">Sjednice</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                <Link to="/documents">Zakoni</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                <Link to="/pogodnosti">Pogodnosti</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                <Link to="/contact">Kontakt</Link>
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                {user ?  <Link onClick={userLogout}>{lang === "latin" ? "Izloguj se" : "Излогуј се"}</Link> : <Link to={"/login"}>{lang === "latin" ? "Uloguj se" : "Улогуј се"}</Link>  }
            </motion.li>
            <motion.li onClick={handleisMenuOpen} animate={{height: isMenuOpen? "50px" : 0}}>
                        <Link className=''> 
                           
                           <img src={userIcon} alt="user" />
                        
                           <p id='userLogin-name'>{user?.username} </p>
                        
                        </Link>
            </motion.li>
        </motion.ul>
             
    </div>
  )
}

export default HamburgerMenu