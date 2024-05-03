import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import pdfdownload from "../../images/pdf.png";
import "./Session.css";
import salon from "../../images/PlavaSala.jpg";

const Session = () => {
    const navigate = useNavigate();
    const location_id = useParams().id;
    const location = useLocation().pathname;
    const skupstina = location.includes("skupstina");
    
    // let [itemInfo, setIteminfo] = useState({});
    let [sessionInfo, setSessionInfo] = useState({});
    let [sessionsInfo, setSessionsInfo] = useState([]);

    const {sessionId} = useContext(AuthContext);
    const {setSessionId} = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    const { lang } = useContext(AuthContext);
    const { domain_url } = useContext(AuthContext);

    let CategoriesInfo;

    if (lang === "latin") {
        CategoriesInfo = [
            {
                name: "Sjednice Skupštine",
                path: "/sjednice/skupstina",
            },
            {
                name: "Sjednice Izvršnog odbora",
                path: "/sjednice/izvrsni_odbor",
            },
        ];
    } else {
        CategoriesInfo = [
            {
                name: "Сједнице Скупштине",
                path: "/sjednice/skupstina",
            },
            {
                name: "Сједнице Извршног oдбора",
                path: "/sjednice/izvrsni_odbor",
            },
        ];
    }

    const getSession = async () => {
        
        let response = await fetch(
            `${domain_url}api/sessions/${sessionId}/`
        );
        let data = await response.json();

        data.created = data.created.slice(0, 10);

        for (const i in data.documents) {
            data.documents[i].created = data.documents[i].created.slice(0, 10);
        }

        setSessionInfo(data);
        
    };

    const getSessions = async () => {
        let fetch_url;
        let category;
        if (skupstina) {
            fetch_url =
                domain_url + "api/categorySessions/?name=skupstina";
            category = "skupstina";
        } else {
            fetch_url =
                domain_url + "api/categorySessions/?name=izvrsni_odbor";
            category = "izvrsni_odbor";
        }
        let response = await fetch(fetch_url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        let data = await response.json();
        // console.log(data);
        setSessionsInfo(data);
        if (location_id === null || location_id === undefined) {
            for (const item in data) {
                data[item].created = data[item].created.slice(0, 10);
                for (const i in data[item].documents) {
                    data[item].documents[i].created = data[item].documents[
                        i
                    ].created.slice(0, 10);
                }

                setSessionInfo(data[0]);
            }
        }
    };

    useEffect(() => {
        getSessions();
        window.scrollTo(0, 0);
    }, [skupstina]);

    useEffect(() => {
        if (sessionId !== undefined) {
            getSession();
            window.scrollTo(0, 0);
        } else { 
            navigate("/sjednice/skupstina")
            getSessions()
        }
    }, [location_id]); 



    const setUpSessionId = (id) => { 
        setSessionId(id)
        localStorage.setItem("SessionInfo", id) 
    }
    

    return (
        <div className="Session__container-main">
            {skupstina ? (
                <HeaderPhoto
                    image_url={salon}
                    page_name={lang === "latin" ? "Skupština" : "Скупштинa"}
                />
            ) : (
                <HeaderPhoto
                    image_url={salon}
                    page_name={
                        lang === "latin" ? "Izvršni Odbor" : "Извршни Одбор"
                    }
                />
            )}

            <div className="Session__container">
                <div className="Session__container-left">
                    {sessionInfo && (
                        <div>
                            <h1 className="Session__document-container__documentHeader">
                                {lang === "latin"
                                    ? sessionInfo.title
                                    : sessionInfo.title_cyrillic}
                            </h1>
                            <p className="border-Bottom ">
                                {sessionInfo.created_eu_time}
                            </p>
                            {sessionInfo.agenda_items && (
                                <div className="Session__agenda-container">
                                    <h3>
                                        {lang === "latin"
                                            ? "Dnevni red"
                                            : "Дневни ред"}
                                    </h3>
                                    {sessionInfo.agenda_items.map(
                                        (item, index) => (
                                            <p key={item.id}>
                                                {index + 1 + ". "}{" "}
                                                {lang === "latin"
                                                    ? item.title
                                                    : item.title_cyrillic}
                                            </p>
                                        )
                                    )}
                                </div>
                            )}
                            {sessionInfo.documents && user ? (
                                <div className="Session__documents-container">
                                    <h3>
                                        {lang === "latin"
                                            ? "Dokumenta"
                                            : "Документа"}
                                    </h3>
                                    {sessionInfo.documents.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.download_link}
                                            className="Session__document-container"
                                        >
                                            <img src={pdfdownload} alt="pdf" />
                                            <div className="Session__document-info__container">
                                                <h5>
                                                    {lang === "latin"
                                                        ? item.title
                                                        : item.title_cyrillic}
                                                </h5>
                                                <p>{item.created_eu_time}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    )}
                </div>

                <div className="Session__container-right">
                    {skupstina ? (
                        <h1>{lang === "latin" ? "Skupština" : "Скупштинa"}</h1>
                    ) : (
                        <h1>
                            {lang === "latin"
                                ? "Izvršni Odbor"
                                : "Извршни Одбор"}
                        </h1>
                    )}

                    <div className="Session__links-container">
                        {sessionsInfo?.map((item) => (
                            <Link
                                to={
                                    skupstina
                                        ? "/sjednice/skupstina/" + item.title
                                        : "/sjednice/izvrsni_odbor/" + item.title
                                }
                                key={item.id}
                                onClick={() => setUpSessionId(item.id)}
                            >
                                {lang === "latin"
                                    ? item.title
                                    : item.title_cyrillic}
                            </Link>
                        ))}
                    </div>

                    <Categories
                        categories={CategoriesInfo}
                        title={lang === "latin" ? "Kategorije" : "Категорије"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Session;
