import React, { useState } from 'react'
import "./NavBarMain.css"
import { Link } from 'react-router-dom'
import logo from "../../images/Artboard.png"
import { motion } from 'framer-motion';
import MainMenu from '../MainMenu/MainMenu';


const NavBarMain = () => {

    const [clickedLang, setClickedLang] = useState(false)
    const [isHoveredMNE, setIsHoveredMNE] = useState(false);
    const [isHoveredEN, setIsHoveredEN] = useState(false);

    const changeLangMNE = () => { 
        setClickedLang(false)
    }

    const changeLangEN = () => { 
        setClickedLang(true)
    }

    const [LoginHovered, setLoginHovered] = useState(false) 
    const ToggleLoginHovered = () => { 
        setLoginHovered(!LoginHovered)
    }

  return (
    <div className='NavBarMain__container'>
        <div className='NavBarMain__container-top'>
            <div className='NavBarMain-lang'>
                <motion.div 
                    whileHover={{
                        scale: 1.05, // Scale the element on hover
                        
                    }}
                    initial={{ opacity: 0, y: 50 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation state
                    exit={{ opacity: 0, y: 50 }} // Exit animation state
                    transition={{ duration: 0.1 }} // Duration of the animation
                    style={{
                        backgroundColor:  !clickedLang || isHoveredMNE? '#a67c00' :  "transparent",                        borderBottom: !clickedLang? "1.5px solid white": "",
                    }}
                    onMouseEnter={()=> setIsHoveredMNE(true)}
                    onMouseLeave={()=>setIsHoveredMNE(false)}
                    >
                     <Link onClick={changeLangMNE} to="" id="mne">MNE</Link>
                </motion.div>

                <motion.div 
                    whileHover={{
                        scale: 1.05, // Scale the element on hover
                    }}
                    initial={{ opacity: 0, y: 50 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation state
                    exit={{ opacity: 0, y: 50 }} // Exit animation state
                    transition={{ duration: 0.1 }} // Duration of the animation
                    style={{
                        backgroundColor:  clickedLang || isHoveredEN? '#a67c00' :  "transparent",
                        borderBottom: clickedLang? "1.5px solid white": "",
                    }}
                    onMouseEnter={()=> setIsHoveredEN(true)}
                    onMouseLeave={()=> setIsHoveredEN(false)}
                    >
                    <Link onClick={changeLangEN} to="" id="en">EN</Link>
                </motion.div>
               
                
            </div>
            
        </div>

        <div className='NavBarMain__container-bottom'>
            <div className='NavBarMain__logo-container'>
                {/* <img src={logo} alt="" /> */}
                <h1>Sindikat</h1>
                <p>Skupštine Crne Gore</p>
            </div>

            <motion.div  animate={{scale: LoginHovered? 1.1 : 1}} 
          
             className='NavBarMain__login-container'>
                    <Link   
                        onMouseEnter={ToggleLoginHovered}
                        onMouseLeave={ToggleLoginHovered}   
                        to="">Uloguj se</Link>
            </motion.div>

        </div> 



    </div>
  )
}

export default NavBarMain