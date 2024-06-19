import React, { useEffect, useState, useContext } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import "../SkupstinaPage/SkupstinaPage.css";
import AuthContext from "../../Context/AuthContext";
import pdfdownload from "../../images/pdf.png";
import salon from "../../images/Plenarna_sala.jpg";
import { Helmet } from "react-helmet";


const SkupstinaPage = () => {
    const [documents, setDocuments] = useState([]);
    const { lang } = useContext(AuthContext);
    const { domain_url } = useContext(AuthContext);

    const getDocuments = async () => {
        const response = await fetch(
            `${domain_url}api/allDocuments/?name=other`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
        let data = await response.json();
        if (response.ok) {
            setDocuments(data);
        } else {
            setDocuments([]);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getDocuments();
    }, []);

    return (
        <div className="SkupstinaPage__main-container">
            <Helmet>
                <link rel="canonical" href="https://sindikat.skupstina.me/skupstina" />
            </Helmet>
            <HeaderPhoto
                image_url={salon}
                page_name={lang === "latin" ? "Skupština" : "Скупштинa"}
            />
            <div className="SkupstinaPage__container">
                <h1>Dokumenta</h1>
                <ul className="SkupstinaPage__doc-container">
                    {documents?.map((item) => (
                        <li>
                            <img src={pdfdownload} alt="" />
                            <a href={item.download_link}>{lang === "latin" ? item?.title : item?.title_cyrillic}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkupstinaPage;
