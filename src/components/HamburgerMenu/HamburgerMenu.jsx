import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import closeMenu from "../../images/closeMenu.png";
import openMenu from "../../images/openMenu.png";
import userIcon from "../../images/user.png";
import "../HamburgerMenu/HamburgerMenu.css";

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

  return (
    <div className={"HamburgerMenu__container transparent"}>
      <div className="HamburgerMenu__img-container" onClick={handleisMenuOpen}>
        <img src={!isMenuOpen ? openMenu : closeMenu} alt="" />
      </div>
      <motion.ul
        animate={{
          height: isMenuOpen ? "400px" : 0,
          transition: 1,
          animationDelay: 5,
        }}
        className={
          isMenuOpen
            ? "HamburgerMenu__links-container HamburgerMenu__container-bg__color"
            : "HamburgerMenu__links-container hidden"
        }
      >
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link to="/news">Aktuelnosti</Link>
        </motion.li>
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link onClick={handleisSubMenuOpen} to="">Sindikat</Link>
          {/* Dodajte novi ul element unutar kojeg će biti podmeni za Sindikat */}
          <ul 
            animate={{
                height: isSubMenuOpen ? "fit-content" : 0,
                transition: 1,
                animationDelay: 5,
            }}
            className="HamburgerMenu__sub-menu">
            <li>
              <Link to="/skupstina">Skupstina</Link>
            </li>
            <li>
              <Link to="/predsjednik">Predsjednik</Link>
            </li>
            <li>
              <Link to="/zamjenik-predsjednika">Zamjenik predsjednika</Link>
            </li>
            <li>
              <Link to="/izvrsni-odbor">Izvrsni odbor</Link>
            </li>
            <li>
              <Link to="/nadzorni-odbor">Nadzorni odbor</Link>
            </li>
            <li>
              <Link to="/statutarna-komisija">Statutarna komisija</Link>
            </li>
            
          </ul>





        </motion.li>
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link to="/session/skupstina">Sjednice</Link>
        </motion.li>
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link to="/documents">Zakoni</Link>
        </motion.li>
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link to="/pogodnosti">Pogodnosti</Link>
        </motion.li>
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link to="/contact">Kontakt</Link>
        </motion.li>
        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          {user ? (
            <Link onClick={userLogout}>
              {lang === "latin" ? "Izloguj se" : "Излогуј се"}
            </Link>
          ) : (
            <Link to={"/login"}>
              {lang === "latin" ? "Uloguj se" : "Улогуј се"}
            </Link>
          )}
        </motion.li>

        <motion.li 
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}>
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
        </motion.li>

        <motion.li
          onClick={handleisMenuOpen}
          animate={{ height: isMenuOpen ? "50px" : 0 }}
        >
          <Link className="HamburgerMenu__container-bg__color">
            <img src={userIcon} alt="user" />

            <p id="userLogin-name">{user?.username} </p>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default HamburgerMenu;
