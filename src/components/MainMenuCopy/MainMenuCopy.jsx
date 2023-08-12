import React, { useState, useEffect } from 'react'
import "./MainMenuCopy.css"
import logo from "../../images/Artboard.png"
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import MenuDropdown from '../MenuDropdown/MenuDropdown'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'


const MainMenuCopy = () => {

    const [isFixed, setIsFixed] = useState(false);
    const FixedStyle = {position: isFixed? "fixed": "relative", 
                        height: isFixed ? "50px" : "25%", 
                        borderBottom: isFixed? "1.5px solid #AB0707" : "",
                      }
    const handleScroll = () => {
      if (window.scrollY <= 130) {
        setIsFixed(false);
      } 
      else {
        setIsFixed(true);
      }
    };

    useEffect(() => {
          window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const button1Items = [ 
                {name: 'Predsjednik', path: "/staff/1"},
                {name: 'Zamjenik Predsjednika', path: "/staff/2"},
                {name: 'Generalni sekretar', path: "/staff/1"},
                {name: 'Izvršni odbor', path: "/staff/1"},
                {name: 'Statutarna Komisija', path: "/staff/1"},
    ];


    const button2Items = [ 
      {name: 'Sjednice Skupštine', path: "/sjednice/1"},
      {name: 'Generalni sekretar', path: "/staff/5"},

    ];


    
    const [IsHovered, setIsHovered] = useState(false);

    const toggleHovered = (state) => { 
        setIsHovered(state)
    }

    const [IsHovered1, setIsHovered1] = useState(false);

    const toggleHovered1 = (state) => { 
        setIsHovered1(state)
    }

    const [IsHovered2, setIsHovered2] = useState(false);

    const toggleHovered2 = (state) => { 
        setIsHovered2(state)
    }





  return (
    <div className='menuCopy__container'>

        <div className='menuCopy__logo-icon__container'>
            <div className='menuCopy__img-container'>
                <img src={logo} alt="" />
            </div>
            
            <div className='menuCopy__lang-icons__container'>
                <Link>Latinica</Link>
                <Link>Uloguj se</Link>
            </div>
            <HamburgerMenu />
        </div>
        <div style={FixedStyle} className='menuCopy__container-inner'>
          <ul>
            <MenuDropdown buttonName="Aktuelnosti"   />
            <MenuDropdown buttonName="Sindikat" menuItems={button1Items} />
            <MenuDropdown buttonName="Sjednice" menuItems={button2Items}  />
            <MenuDropdown buttonName="Zakoni" />
            <MenuDropdown buttonName="Pogodnosti"/>
            <MenuDropdown buttonName="Kontakt"/>
          </ul>
          
     
        </div>
        
    </div>
  )
}

export default MainMenuCopy