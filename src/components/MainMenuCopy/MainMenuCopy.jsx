import React, { useState, useEffect, useRef} from 'react'
import "./MainMenuCopy.css"
import logo from "../../images/Artboard.png"
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import MenuDropdown from '../MenuDropdown/MenuDropdown'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import search from "../../images/search.png"



const MainMenuCopy = () => {

    const [isFixed, setIsFixed] = useState(false);
    const FixedStyle = {position: isFixed? "fixed": "relative", 
                        height: isFixed ? "30px" : "30px", 
                        borderBottom: isFixed? "1.5px solid #AB0707" : "",
                      }
    const [IsSearched, setIsSearched] = useState(true)
    const HandleSearchClick = () => { 
        if (inputRef.current) {
          inputRef.current.focus();
        }
     
      setIsSearched(!IsSearched) 
    };
    
    
    
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
      {name: 'Sjednice Izvršnog Odbora', path: "/staff/5"},

    ];

    const inputRef = useRef(null);



  return (
    <div className={'menuCopy__container'}>

        <div className='menuCopy__logo-icon__container'>
            <div className='menuCopy__img-container'>
              <Link to={"/"}>
                  <img src={logo} alt="" />
              </Link>
                
            </div>
            
            <div className='menuCopy__lang-icons__container'>
                <Link>Latinica</Link>
                <Link to={"/login"}>Uloguj se</Link>
            </div>
            <HamburgerMenu />
        </div>
        <div style={FixedStyle} className='menuCopy__container-inner'>
          <ul>
              <MenuDropdown buttonName="Aktuelnosti" path="/news" />
              <MenuDropdown buttonName="Sindikat" menuItems={button1Items} path="/staff" />
              <MenuDropdown buttonName="Sjednice" menuItems={button2Items} path="/session"  />
              <MenuDropdown buttonName="Zakoni" path={"/documents"}/>
              <MenuDropdown buttonName="Pogodnosti"/>
              <MenuDropdown buttonName="Kontakt" path="/contact"/>
            <div className='search-relative__container'>
                <input type="text" autoFocus  
                          ref={inputRef}
                          placeholder='Search news'
                          className={ IsSearched ? 'search-hide' : "" }
                          
                  />
                  <img onClick={HandleSearchClick} 
                        className="search-button"
                        src={search} alt="search-icon" />
            </div>
             
             
       
          </ul>
          
     
        </div>
        
    </div>
  )
}

export default MainMenuCopy