import React, { useEffect, useState, useContext } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import "../SkupstinaPage/SkupstinaPage.css";
import AuthContext from "../../Context/AuthContext";
import pdfdownload from "../../images/pdf.png";
import salon from "../../images/Plenarna_sala.jpg";

const SkupstinaPage = () => {
    const [documents, setDocuments] = useState([]);
    const { lang } = useContext(AuthContext);

    const getDocuments = async () => {
        const response = await fetch(
            `https://apisindikat.skupstina.me/api/allDocuments/?name=other`,
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
                            <a href={item.download_link}>{item?.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SkupstinaPage;
