import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import logo from "../../images/Artboard.png";
import "./Footer.css";

const Footer = () => {
  const { lang } = useContext(AuthContext);

  return (
    <div className="Footer__container">
      <div className="Footer__container-top">
        <div className={"Footer__container-top__col footer_center"}>
          <div className="Footer__image-container">
            <img src={logo} alt="" />
            <div className="Footer__info-container">
              <p>
                {lang === "latin"
                  ? "©2023 Sindikalna organizacija Crne Gore"
                  : "©2023 Синдикална организација Црне Горе"}
              </p>
              <p>
                {lang === "latin"
                  ? "Sva prava zadržana."
                  : "Сва права задржана."}
              </p>
            </div>
          </div>
        </div>
        <div className="Footer__container-top__bigCol">
          <div className="Footer__container-top__col">
            <h1>{lang === "latin" ? "Dokumenta" : "Документа"}</h1>
            <Link>
              {lang === "latin" ? "Ustav Crne Gore" : "Устав Црне Горе"}
            </Link>
            <Link>
              {lang === "latin" ? "Poslovnik Skupštine Crne Gore" : "Пословник Скупштине Црне Горе"}
            </Link>
            <Link>
              {lang === "latin" ? "Statut" : "Статут"}
            </Link>
          </div>
          <div className="Footer__container-top__col">
            <h1>{lang === "latin" ? "Materijali" : "Материјали"}</h1>
            <Link>{lang === "latin" ? "Video Arhiva" : "Видео Архива"}</Link>
            <Link>{lang === "latin" ? "Foto Arhiva" : "Фото Архива"}</Link>
          </div>
        </div>
      </div>
      <div className="Footer__container-bottom">
        <p>
          {lang === "latin"
            ? "Sindikat Skupštine Crne Gore, Bulevar Svetog Petra Cetinjskog broj 10, 81000 Podgorica"
            : "Синдикат Скупштине Црне Горе, Булевар Светог Петра Цетињског број 10, 81000 Подгорица"}
        </p>
        <p>
          {lang === "latin"
            ? "e-mail: sindikat@skupstina.me"
            : "е-маил: sindikat@skupstina.me"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
