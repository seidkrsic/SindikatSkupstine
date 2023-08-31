import React, { useState, useEffect, useRef, useContext} from 'react'
import "./MainMenuCopy.css"
import logo from "../../images/Artboard.png"
import { motion} from 'framer-motion'
import { Link, Navigate } from 'react-router-dom'
import MenuDropdown from '../MenuDropdown/MenuDropdown'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'
import search from "../../images/search.png"
import AuthContext from '../../Context/AuthContext'
import userIcon from "../../images/user.png"


const MainMenuCopy = () => {

  

    const {user} = useContext(AuthContext)
    const {lang} = useContext(AuthContext)
    const {boardMember} = useContext(AuthContext)
    const {debouncedFetchData} = useContext(AuthContext)

    const {updateLang} = useContext(AuthContext)
    const {userLogout} = useContext(AuthContext)

    const [disableEnter, setDisableEnter] = useState(false);

    const handleInputChange = () => {
        setDisableEnter(true);
    };

    const [isFixed, setIsFixed] = useState(false);
    const FixedStyle = {position: isFixed? "fixed": "relative", 
                        height: isFixed ? "30px" : "30px", 
                        borderBottom: isFixed? "1.5px solid #AB0707" : "",
                      }
    const [IsSearched, setIsSearched] = useState(true)

    const HandleSearchClick = () => { 
      handleInputChange()
      document.querySelector("#search").classList.toggle('search-hide')
      document.querySelector('#search').focus()
      document.querySelector('#search').value = ""
      setIsSearched(!IsSearched) 
    };

    const handleInputKeyPress = (event) => {
      if (disableEnter && event.key === 'Enter') {
        event.preventDefault();
      }
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

    let button1Items; 
    let button2Items;
    if (lang === "latin") { 
      button1Items = [ 
        {name: 'Predsjednik', path: "/staff/predsjednik"},
        {name: 'Zamjenik Predsjednika', path: "/staff/zamjenikPredsjednika"},
        {name: 'Generalni sekretar', path: "/staff/generalniSekretar"},
        {name: 'Bivši Predsjednici', path: "/staff/predsjednici"},
        {name: 'Izvršni odbor', path: "/staff/izvrsniodbor"},
        {name: 'Statutarna Komisija', path: "/staff/komisija"},
      ];

      button2Items = [ 
        {name: 'Sjednice Skupštine', path: "/session/skupstina"},
        {name: 'Sjednice Izvršnog Odbora', path: "/session/izvrsni_odbor"},
  
      ];
    } else { 
      button1Items = [ 
        {name: 'Предсједник', path: "/staff/predsjednik"},
        {name: 'Замјеник Предсједника', path: "/staff/zamjenikPredsjednika"},
        {name: 'Генерални секретар', path: "/staff/generalniSekretar"},
        {name: 'Бивши Предсједници', path: "/staff/predsjednici"},
        {name: 'Извршни одбор', path: "/staff/izvrsniodbor"},
        {name: 'Статутарна Комисија', path: "/staff/komisija"},
      ];

      button2Items = [ 
      {name: 'Сједнице Скупштине', path: "/session/skupstina"},
      {name: 'Сједнице Извршног Одбора', path: "/session/izvrsni_odbor"},

    ];
    }
    


    


    const setLatin = () => { 
      updateLang("latin") 
      localStorage.setItem("lang", "latin")
    }

    const setCyrillic = () => { 
      updateLang("cyrillic") 
      localStorage.setItem("lang","cyrillic")
    }
    





  return (
    <div className={'menuCopy__container'}>

        <div className='menuCopy__logo-icon__container'>
            <div className='menuCopy__img-container'>
              <Link to={"/"}>
                  <img src={logo} alt="" />
              </Link>
                
            </div>
            
            <div className='menuCopy__lang-icons__container'>
                <Link onClick={lang === "latin" ? ()=>{setCyrillic()} : ()=>{setLatin()}}>{lang == "latin" ? "Ћирилица" : "Latinica"}</Link>
                <div className='menuCopy__login-container'>
                  {user ?  <p onClick={userLogout}>{lang === "latin" ? "Izloguj se" : "Излогуј се"}</p> : <Link to={"/login"}>{lang === "latin" ? "Uloguj se" : "Улогуј се"}</Link>  }
                  {user &&  
                           <div className='userLogin__container'> 
                           
                              <img src={userIcon} alt="user" />
                           
                              <p id='userLogin-name'>{user.username} </p>
                           
                           </div>
                          }
                </div>
                

            </div>
            <HamburgerMenu />
        </div>
        <div style={FixedStyle} className='menuCopy__container-inner'>
          <ul>
              <MenuDropdown buttonName={ lang==="latin" ? "Aktuelnosti": "Актуелности"} path="/news" />
              <MenuDropdown buttonName={lang==="latin" ? "Sindikat" : "Синдикат"} menuItems={button1Items} path="/staff" />
              <MenuDropdown buttonName={lang==="latin" ? "Sjednice" : "Сједнице"} menuItems={button2Items} path="/session"  />
              { user && boardMember ? <MenuDropdown buttonName={ lang === "latin" ? "Dokumenta": "Документа"} path={"/documents"}/> : <></>}
           
              <MenuDropdown buttonName={lang==="latin" ? "Pogodnosti" : "Погодности"}/>
              <MenuDropdown buttonName={lang==="latin" ? "Kontakt" : "Контакт"} path="/contact"/>
            <div className='search-relative__container'>
              <form>
                  <input type="text"  
                              autoFocus
                              name="search"
                              id="search"
                              onKeyPress={handleInputKeyPress}
                              onChange={debouncedFetchData}
                              placeholder={lang === "latin" ? 'Pretraži Vijesti' : "Претражи Вијести"}
                              className={ IsSearched ? 'search-hide' : "" }
                              
                      />
              </form>
                
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