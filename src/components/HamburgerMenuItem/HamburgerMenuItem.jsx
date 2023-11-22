import React, { useState } from 'react'
import "./HamburgerMenuItem.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';



const HamburgerMenuItem = ({path, title, items}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {isMenuOpen} = useContext(AuthContext);
    const {handleisMenuOpen} = useContext(AuthContext);
  
    return (
        <div onClick={ path ? handleisMenuOpen : ()=>{setMenuOpen(!menuOpen)}} 
            className='HamburgerMenuItem__content-container'>

            <Link to={path ? path : ""} className="HamburgerMenuItem__content-container__link">{items ? title + " ⥕ " : title}</Link>
           
           { items &&
                <div className={ menuOpen ? 'HamburgerMenuItem__content openMenu' : 'HamburgerMenuItem__content' }>
                    {items.map((item, index) => (
                        <Link onClick={()=>{setMenuOpen(!menuOpen)}}  className={menuOpen ? "" : "yes-height "} to={item.path} key={index}>{item.name}</Link>
                    )

                )}
                </div>

           }
           


        </div>
    )
}

export default HamburgerMenuItem