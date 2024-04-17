import React, { useContext, useState, useEffect } from "react";
import Categories from "../../components/Categories/Categories";
import AuthContext from "../../Context/AuthContext";
import "./LawsPage.css";
import { useLocation } from "react-router-dom";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import pdfdownload from "../../images/pdf.png";
import salon from "../../images/Plenarna_sala.jpg";

const LawsPage = () => {
    const { lang } = useContext(AuthContext);
    const location = useLocation().pathname;
    const { domain_url } = useContext(AuthContext);

    let filter;
    let LawsHeader;
    if (location.includes("akti_sindikata")) {
        LawsHeader = "Akti SOSCG";
    } else if (location.includes("opsti_akti")) {
        LawsHeader = "Zakoni i drugi akti";
    } else if (location.includes("formulari")) {
        LawsHeader = "Formulari i obrasci";
    } else {
        LawsHeader = "Zakoni";
    }

    const [documents, setDocuments] = useState([]);
    let CategoriesInfo;
    if (lang === "latin") {
        CategoriesInfo = [
            { name: "Akti SOSCG", path: "/zakoni/akti_sindikata" },
            { name: "Zakoni i drugi akti", path: "/zakoni/opsti_akti" },
            { name: "Formulari i obrasci", path: "/zakoni/formulari" },
        ];
    } else {
        CategoriesInfo = [
            { name: "Акти СОСЦГ", path: "/zakoni/akti_sindikata" },
            { name: "Закони и други акти", path: "/zakoni/opsti_akti" },
            { name: "Формулари и обрасци", path: "/zakoni/formulari" },
        ];
    }

    const getDocuments = async () => {
        if (location.includes("akti_sindikata")) {
            filter = "legislation";
        } else if (location.includes("opsti_akti")) {
            filter = "laws";
        } else if (location.includes("formulari")) {
            filter = "regulations";
        }

        const response = await fetch(
            domain_url + `api/allDocuments/?name=${filter}`,
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
    }, [location]);

    return (
        <div className="LawsPage__main-container">
            <HeaderPhoto
                page_name={lang === "latin" ? LawsHeader : LawsHeader}
                image_url={salon}
            />
            <div className="LawsPage__container">
                <div className="LawsPage__left-container">
                    <h1>{LawsHeader}</h1>
                    <div className="LawsPage__document-container">
                        {documents.map((item) => (
                            <a
                                href={item?.download_link}
                                key={item?.id}
                                className=""
                            >
                                <img src={pdfdownload} alt="pdf" />
                                <div className="LawsPage__text-container">
                                    <p>
                                        {lang === "latin"
                                            ? item?.title
                                            : item?.title_cyrillic}
                                    </p>
                                    {/* <p className="">{item?.created_eu_time}</p> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="LawsPage__right-container">
                    <Categories
                        categories={CategoriesInfo}
                        title={lang === "latin" ? "Kategorije" : "Категорије"}
                    />
                </div>
            </div>
        </div>
    );
};

export default LawsPage;
