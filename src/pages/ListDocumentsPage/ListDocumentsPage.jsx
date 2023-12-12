import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import pdfdownload from "../../images/pdf.png";
import "./ListDocumentsPage.css";
import salon from "../../images/Plenarna_sala.jpg";

const ListDocumentsPage = () => {
    const { authToken } = useContext(AuthContext);
    const { lang } = useContext(AuthContext);

    const [documents, setDocuments] = useState([]);

    const getDocs = async () => {
        try {
            // console.log(`Bearer ${authToken?.access}`)
            let response = await fetch(
                "https://apisindikat.skupstina.me/api/important/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${authToken.access}`,
                    },
                }
            );
            // console.log(response.ok)
            if (response.ok) {
                let data = await response.json();

                if (data.length === 0) {
                    setDocuments([]);
                } else {
                    setDocuments(data);
                }
            } else {
                console.error("Greška pri dohvatanju dokumenata");
            }
        } catch (error) {
            console.error("Greška pri dohvatanju dokumenata:", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useLayoutEffect(() => {
        getDocs();
    }, []);

    return (
        <div className="ListDocumentsPage__container-main">
            <HeaderPhoto
                image_url={salon}
                page_name={
                    lang === "latin"
                        ? "Izvještaji i dokumenta"
                        : "Извјештаји и Документа"
                }
            />
            <h1 className="heading__scroll_div">
                {lang === "latin" ? "Važna Dokumenta" : "Важна Документа"}
            </h1>
            <div className="ListDocumentsPage__container">
                {documents.map((item) => (
                    <a
                        href={item.download_link}
                        key={item.id}
                        className="ListDocumentsPage__document-container"
                    >
                        <img src={pdfdownload} alt="pdf" />
                        <div className="ListDocumentsPage__text-container">
                            <p>
                                {lang === "latin"
                                    ? item.title
                                    : item.title_cyrillic}
                            </p>
                            {/* <p className="dateFont">{item.created_eu_time}</p> */}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ListDocumentsPage;
