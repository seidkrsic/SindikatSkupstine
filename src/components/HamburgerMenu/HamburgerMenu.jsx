import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import closeMenu from "../../images/closeMenu.png";
import openMenu from "../../images/openMenu.png";
import userIcon from "../../images/user.png";
import "../HamburgerMenu/HamburgerMenu.css";
import HamburgerMenuItem from "../HamburgerMenuItem/HamburgerMenuItem";

const HamburgerMenu = () => {
    // const [isMenuOpen, setisMenuOpen] = useState(false);

    // const handleisMenuOpen = () => setisMenuOpen(!isMenuOpen);

    const { lang } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const {boardMember} = useContext(AuthContext);
    const { userLogout } = useContext(AuthContext); 
    const { updateLang } = useContext(AuthContext);
    const {isMenuOpen} = useContext(AuthContext);
    const {handleisMenuOpen} = useContext(AuthContext);

    

    const menuItems1 = [ 
        { 
          title: "Aktuelnosti", 
          path: "/news"
          
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
          path: "/pogodnosti"
          
        },

        { 
          title: "Kontakt", 
          path: "/contact"
          
        },
        { 
          title: lang == "latin" ? "Ćirilica" : "Latinica", 
          path:  lang == "latin" ?  "/latin" : "/cyrillic",
          
        },

        { 
          title: user ?  "Izloguj se" : "Uloguj se", 
          path: user ? "/logout" : "/login"
          
        },
        { 
          title: user && boardMember ? "Dokumenta" : "", 
          path: user && boardMember ? "/documents" : ""
          
        },



        

    ];

    const menuItems2 = [ 
      { 
        title: "Актуелности", 
        path: "/news"
      },
      { 
        title: "Синдикат", 
        items: [ 
          { name: "Скупштина", path: "/skupstina" },
          { name: "Предсједник", path: "/saziv/predsjednik" },
          { name: "Замјеник предсједника", path: "/saziv/zamjenikPredsjednika" },
          { name: "Извршни одбор", path: "/saziv/izvrsniodbor" },
          { name: "Надзорни одбор", path: "/saziv/nadzorniodbor" },
          { name: "Статутарна комисија", path: "/saziv/komisija" },
        ]
      }, 
      { 
        title: "Сједнице", 
        items: [ 
          { name: "Сједнице Скупштине", path: "/session/skupstina" },
          { name: "Сједнице Извршног одбора", path: "/session/izvrsni_odbor" },
        ]
      }, 
      { 
        title: "Закони и Акти", 
        items: [ 
          { name: "Акти SOSCG", path: "/zakoni/akti_sindikata" },
          { name: "Закони и други акти", path: "/zakoni/opsti_akti"},
          { name: "Формулари и обрасци", path: "/zakoni/formulari"},
        ]
      }, 
      { 
        title: "Погодности", 
        path: "/pogodnosti"
      },
      { 
        title: "Контакт", 
        path: "/contact"
      },

      { 
        title: lang == "latin" ? "Ћирилица" : "Latinica", 
        path:  lang == "latin" ?  "/latin" : "/cyrillic",
        
      },

      { 
        title: user ? "Излогуј се" : "Улогуј се", 
        path: user ? "/logout" : "/login"
      },
      { 
        title: user && boardMember ? "Документа" : "", 
        path: user && boardMember ? "/documents" : ""
      },
    ];
    
    let menuItems = lang === "latin" ? menuItems1 : menuItems2;



    useEffect(()=> { 

    }, [user])

    return (
      <div className={"HamburgerMenu__container transparent"}>
        <div className="HamburgerMenu__img-container" onClick={handleisMenuOpen}>
          <img src={!isMenuOpen ? openMenu : closeMenu} alt="" />
        </div>
        <div className={isMenuOpen ? "HamburgerMenu__item-container" : "HamburgerMenu__item-container no_content"}>
          {
            menuItems?.map((element, index)=> {
              if (element.path !== "") { 
                return <HamburgerMenuItem onClick={handleisMenuOpen} path={element.path} title={element.title} items={element.items} key={index} />
                
              }

              
            })
            
          } 
      
                    

          
         
        
        </div>
      </div>
    );
};

export default HamburgerMenu;
