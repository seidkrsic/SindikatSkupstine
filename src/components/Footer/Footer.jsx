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
                                    ? "©2023 Sindikalna organizacija Skupštine Crne Gore"
                                    : "©2023 Синдикална организација Скупштине Црне Горе"}
                            </p>
                            <p>
                                {lang === "latin"
                                    ? "Sva prava zadržava."
                                    : "Сва права задржава."}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Footer__container-top__bigCol">
                    <div className="Footer__container-top__col">
                        <h1>{lang === "latin" ? "Dokumenta" : "Документа"}</h1>
                        <a href="https://apisindikat.skupstina.me/api/importantDocuments/3601629a-7387-4bb5-baa0-3bcf88562529/download/">
                            {lang === "latin"
                                ? "Ustav Crne Gore"
                                : "Устав Црне Горе"}
                        </a>
                        <a href="https://apisindikat.skupstina.me/api/importantDocuments/4e5ca817-4955-4419-b84a-e074d61c0d3b/download/">
                            {lang === "latin"
                                ? "Poslovnik Skupštine Crne Gore"
                                : "Пословник Скупштине Црне Горе"}
                        </a>
                        <a href="https://apisindikat.skupstina.me/api/importantDocuments/5e1e6da4-16d4-492b-b881-797f6e342e11/download/">
                            {lang === "latin" ? "Statut" : "Статут"}
                        </a>
                        <a href="https://apisindikat.skupstina.me/api/importantDocuments/0bcfcb1f-d0f8-4c0c-a0f4-17f567a7cb3c/download/">
                            {lang === "latin"
                                ? "Tekst himne SOSCG"
                                : "Текст химне СОСЦГ"}
                        </a>
                    </div>
                    <div className="Footer__container-top__col">
                        <h1>
                            {lang === "latin" ? "Materijali" : "Материјали"}
                        </h1>
                        <Link>
                            {lang === "latin" ? "Video Arhiva" : "Видео Архива"}
                        </Link>
                        <Link>
                            {lang === "latin" ? "Foto Arhiva" : "Фото Архива"}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Footer__container-bottom">
                <p>
                    {lang === "latin"
                        ? "Sindikalna organizacija Skupštine Crne Gore, Bulevar Svetog Petra Cetinjskog broj 10, 81000 Podgorica"
                        : "Синдикална организација Скупштине Црне Горе, Булевар Светог Петра Цетињског број 10, 81000 Подгорица"}
                </p>
                <p>
                    {lang === "latin"
                        ? "Mejl: sindikat@skupstina.me"
                        : "Mejl: sindikat@skupstina.me"}
                </p>
            </div>
        </div>
    );
};

export default Footer;
