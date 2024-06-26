import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import logo from "../../images/Artboard_2.png";
import search from "../../images/search.png";
import userIcon from "../../images/user.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import "./MainMenuCopy.css";

const MainMenuCopy = () => {
    const { user } = useContext(AuthContext);
    const { lang } = useContext(AuthContext);
    const { boardMember } = useContext(AuthContext);
    const { debouncedFetchData } = useContext(AuthContext);

    const { updateLang } = useContext(AuthContext);
    const { userLogout } = useContext(AuthContext);

    const [disableEnter, setDisableEnter] = useState(false);

    const handleInputChange = () => {
        setDisableEnter(true);
    };

    const [isFixed, setIsFixed] = useState(false);
    const FixedStyle = {
        position: isFixed ? "fixed" : "relative",
        height: isFixed ? "30px" : "30px",
        borderBottom: isFixed ? "1.5px solid #AB0707" : "",
    };
    const [IsSearched, setIsSearched] = useState(true);

    const HandleSearchClick = () => {
        handleInputChange();
        document.querySelector("#search").classList.toggle("search-hide");
        document.querySelector("#search").focus();
        document.querySelector("#search").value = "";
        setIsSearched(!IsSearched);
    };

    const handleInputKeyPress = (event) => {
        if (disableEnter && event.key === "Enter") {
            event.preventDefault();
        }
    };

    const handleScroll = () => {
        if (window.scrollY <= 130) {
            setIsFixed(false);
        } else {
            setIsFixed(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let button1Items;
    let button2Items;
    let button3Items;
    if (lang === "latin") {
        button1Items = [
            { name: "Skupština", path: "/skupstina" },
            { name: "Predsjednik", path: "/saziv/predsjednik" },
            { name: "Zamjenik predsjednika", path: "/saziv/zamjenik" },
            { name: "Izvršni odbor", path: "/saziv/izvrsniodbor" },
            {
                name: "Generalni sekretar",
                path: "/saziv/generalni_sekretar",
            },
            { name: "Nadzorni odbor", path: "/saziv/nadzorniodbor" },
            { name: "Statutarna komisija", path: "/saziv/komisija" },
            // { name: "Raniji predsjednici", path: "/saziv/predsjednici" },
        ];
        
        
        button2Items = [
            { name: "Sjednice Skupštine", path: "/sjednice/skupstina" },
            {
                name: "Sjednice Izvršnog odbora",
                path: "/sjednice/izvrsni_odbor",
            },
        ]; 

        if (user){ 
            button3Items = [
                { name: "Akti SOSCG", path: "/zakoni/akti_sindikata" },
                { name: "Zakoni i drugi akti", path: "/zakoni/opsti_akti" },
                { name: "Formulari i obrasci", path: "/zakoni/formulari" },
                {name: "Finansijske odluke", path: "/racunovodstvo_odluke"}
            ];
            
        } else { 
            button3Items = [
                { name: "Akti SOSCG", path: "/zakoni/akti_sindikata" },
                { name: "Zakoni i drugi akti", path: "/zakoni/opsti_akti" },
                { name: "Formulari i obrasci", path: "/zakoni/formulari" },
            ];
        }

        
    } else {
        button1Items = [
            { name: "Скупштина", path: "/skupstina" },
            { name: "Предсједник", path: "/saziv/predsjednik" },
            { name: "Замјеник предсједника", path: "/saziv/zamjenik" },
            { name: "Извршни одбор", path: "/saziv/izvrsniodbor" },
            {
                name: "Генерални секретар",
                path: "/saziv/generalni_sekretar",
            },
            { name: "Надзорни одбор", path: "/saziv/nadzorniodbor" },
            { name: "Статутарна комисија", path: "/saziv/komisija" },
            // { name: "Ранији предсједници", path: "/saziv/predsjednici" },
        ];
    
        button2Items = [
            { name: "Сједнице Скупштине", path: "/sjednice/skupstina" },
            {
                name: "Сједнице Извршног oдбора",
                path: "/sjednice/izvrsni_odbor",
            },
        ];
        
        if (user) { 
            button3Items = [
                { name: "Акти СОСЦГ", path: "/zakoni/akti_sindikata" },
                { name: "Закони и други акти", path: "/zakoni/opsti_akti" },
                { name: "Формулари и обрасци", path: "/zakoni/formulari" },
                {name: "Финансијске одлуке", path: "/racunovodstvo_odluke"}
                
            ];
        } else { 
            button3Items = [
                { name: "Акти СОСЦГ", path: "/zakoni/akti_sindikata" },
                { name: "Закони и други акти", path: "/zakoni/opsti_akti" },
                { name: "Формулари и обрасци", path: "/zakoni/formulari" },
                
                
            ];
        }
       
    }
    
    

    const setLatin = () => {
        updateLang("latin");
        localStorage.setItem("lang", "latin");
    };

    const setCyrillic = () => {
        updateLang("cyrillic");
        localStorage.setItem("lang", "cyrillic");
    };

    return (
        <div className={"menuCopy__container"}>
            <div className="menuCopy__logo-icon__container">
                <div className="menuCopy__img-container">
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="menuCopy__lang-icons__container">
                    <Link
                        onClick={
                            lang === "latin"
                                ? () => {
                                      setCyrillic();
                                  }
                                : () => {
                                      setLatin();
                                  }
                        }
                    >
                        {lang == "latin" ? "Ћирилица" : "Latinica"}
                    </Link>
                    <div className="menuCopy__login-container">
                        {user ? (
                            <p onClick={userLogout}>
                                {lang === "latin" ? "Izloguj se" : "Излогуј се"}
                            </p>
                        ) : (
                            <Link to={"/login"}>
                                {lang === "latin" ? "Uloguj se" : "Улогуј се"}
                            </Link>
                        )}
                        {user && (
                            <div className="userLogin__container">
                                <img src={userIcon} alt="user" />

                                <p id="userLogin-name">{user.username} </p>
                            </div>
                        )}
                    </div>
                </div>
                <HamburgerMenu />
            </div>
            <div style={FixedStyle} className="menuCopy__container-inner">
                <ul>
                    <MenuDropdown
                        buttonName={
                            lang === "latin" ? "Aktuelnosti" : "Актуелности"
                        }
                        path="/aktuelnosti"
                    />
                    <MenuDropdown
                        buttonName={lang === "latin" ? "Sindikat" : "Синдикат"}
                        menuItems={button1Items}
                        // path="/staff"
                        path=""
                    />
                    <MenuDropdown
                        buttonName={lang === "latin" ? "Sjednice" : "Сједнице"}
                        menuItems={button2Items}
                        path=""
                        // path="/session/skupstina"
                    />
                    {user && boardMember ? (
                        <MenuDropdown
                            buttonName={
                                lang === "latin" ? "Dokumenta" : "Документа"
                            }
                            path={"/documents"}
                        />
                    ) : (
                        <></>
                    )}

                    <MenuDropdown
                        buttonName={
                            lang === "latin" ? "Zakoni i akti" : "Закони и акти"
                        }
                        path=""
                        menuItems={button3Items}
                    />

                    <MenuDropdown
                        buttonName={
                            lang === "latin" ? "Pogodnosti" : "Погодности"
                        }
                        path="/pogodnosti"
                    />
                    <MenuDropdown
                        buttonName={lang === "latin" ? "Kontakt" : "Контакт"}
                        path="/kontakt"
                    />
                    <div className="search-relative__container">
                        <form>
                            <input
                                type="text"
                                autoFocus
                                name="search"
                                id="search"
                                onKeyPress={handleInputKeyPress}
                                onChange={debouncedFetchData}
                                placeholder={
                                    lang === "latin"
                                        ? "Pretraži Vijesti"
                                        : "Претражи Вијести"
                                }
                                className={IsSearched ? "search-hide" : ""}
                            />
                        </form>

                        <img
                            onClick={HandleSearchClick}
                            className="search-button"
                            src={search}
                            alt="search-icon"
                        />
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default MainMenuCopy;
