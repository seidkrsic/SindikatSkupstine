import React, { useState } from 'react'
import "./HamburgerMenuItem.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';



const HamburgerMenuItem = ({path, title, items}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {isMenuOpen} = useContext(AuthContext);
    const {handleisMenuOpen} = useContext(AuthContext);
    const {userLogout} = useContext(AuthContext);
    const { updateLang } = useContext(AuthContext);

    const setLatin = () => {
        updateLang("latin");
        localStorage.setItem("lang", "latin");
      };
  
    const setCyrillic = () => {
        updateLang("cyrillic");
        localStorage.setItem("lang", "cyrillic");
    };


    const specialLogoutHandle = () => { 
        handleisMenuOpen(!isMenuOpen)
        userLogout()
    }

    const handleClick = () => {
        if (path === "/logout") {
            specialLogoutHandle();
        } else if (path === "/latin") { 
            setCyrillic()
        } else if (path === "/cyrillic") { 
            setLatin()
        } 
        
        else {
            handleisMenuOpen()
        }
    };
   
    return (
        <div onClick={ path ? handleClick : ()=>{setMenuOpen(!menuOpen)}} 
            className='HamburgerMenuItem__content-container'>

            <Link to={path ? path : ""} className="HamburgerMenuItem__content-container__link">{items ? title + " ⥕ " : title}</Link>
           
           { items &&
                <div className={ menuOpen ? 'HamburgerMenuItem__content openMenu' : 'HamburgerMenuItem__content' }>
                    {items?.map((item, index) => (
                        <Link onClick={handleisMenuOpen}  className={menuOpen ? "" : "yes-height "} to={item?.path} key={index}>{item.name}</Link>
                    )

                )}
                </div>

           }
           


        </div>
    )
}

export default HamburgerMenuItem