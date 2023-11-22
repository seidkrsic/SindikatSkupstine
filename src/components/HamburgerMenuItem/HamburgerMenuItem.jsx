import React, { useState } from 'react'
import "./HamburgerMenuItem.css"
import { Link } from 'react-router-dom';



const HamburgerMenuItem = ({title, items}) => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
        <div onClick={()=>{setMenuOpen(!menuOpen)}} 
            className='HamburgerMenuItem__content-container'>

            <Link className="HamburgerMenuItem__content-container__link">{items ? title + "▼" : title}</Link>
           
           { items &&
                <div className={ menuOpen ? 'HamburgerMenuItem__content openMenu' : 'HamburgerMenuItem__content' }>
                    {items.map((item, index) => (
                        <Link to={item.path} key={index}>{item.name}</Link>
                    )

                )}
                </div>

           }
           


        </div>
    )
}

export default HamburgerMenuItem