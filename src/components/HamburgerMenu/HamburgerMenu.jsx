import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import closeMenu from "../../images/closeMenu.png";
import openMenu from "../../images/openMenu.png";
import userIcon from "../../images/user.png";
import "../HamburgerMenu/HamburgerMenu.css";
import HamburgerMenuItem from "../HamburgerMenuItem/HamburgerMenuItem";

const HamburgerMenu = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const handleisMenuOpen = () => setisMenuOpen(!isMenuOpen);
    const handleisSubMenuOpen = () => setIsSubMenuOpen(!isSubMenuOpen);
    const { lang } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const { userLogout } = useContext(AuthContext); 
    const { updateLang } = useContext(AuthContext);

    const setLatin = () => {
      updateLang("latin");
      localStorage.setItem("lang", "latin");
    };

    const setCyrillic = () => {
      updateLang("cyrillic");
      localStorage.setItem("lang", "cyrillic");
    };

    const menuItems = [ 

      { 
        title: "Sindikat", 
        
      },
        { 
          title: "Sindikat", 
          items: [ 
            { name: "Skupština", path: "/skupstina" },
            { name: "Predsjednik", path: "/saziv/predsjednik" },
            { name: "Zamjenik predsjednika", path: "/saziv/zamjenikPredsjednika" },
            { name: "Izvršni odbor", path: "/saziv/izvrsniodbor" },
            { name: "Nadzorni odbor", path: "/saziv/nadzorniodbor" },
            { name: "Statutarna komisija", path: "/saziv/komisija" },
          ]
        }, 
        { 
          title: "Sjednice", 
          items: [ 
            { name: "Sjednice Skupštine", path: "/session/skupstina" },
            { name: "Sjednice Izvršnog odbora", path: "/session/izvrsni_odbor" },
          
          ]
        }, 
        { 
          title: "Zakoni i Akti", 
          items: [ 
            { name: "Akti SOSCG", path: "/zakoni/akti_sindikata" },
            { name: "Zakoni i drugi akti", path: "/zakoni/opsti_akti"},
            { name: "Formulari i obrasci", path: "/zakoni/formulari"},
          
          ]
        }, 

        { 
          title: "Pogodnosti", 
          
        },

        { 
          title: "Kontakt", 
          
        },



        

    ];

    return (
      <div className={"HamburgerMenu__container transparent"}>
        <div className="HamburgerMenu__img-container" onClick={handleisMenuOpen}>
          <img src={!isMenuOpen ? openMenu : closeMenu} alt="" />
        </div>
        <div className={isMenuOpen ? "HamburgerMenu__item-container" : "HamburgerMenu__item-container no_content"}>
          {
            menuItems.map((element, index)=> ( 
              <HamburgerMenuItem title={element.title} items={element.items} key={index} />
            ))
          } 
        
        </div>
      </div>
    );
};

export default HamburgerMenu;
