import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import StaffCard from "../../components/StaffCard/StaffCard";
import AuthContext from "../../Context/AuthContext";
import "../StaffSinglePage/StaffSinglePage.css";
import parse from "html-react-parser";
import salon from "../../images/Bijeli_salon.jpg";

const StaffSinglePage = () => {
    let CategoriesInfo;
    const { lang } = useContext(AuthContext);

    if (lang === "latin") {
        CategoriesInfo = [
            { name: "Predsjednik", path: "/saziv/predsjednik" },
            { name: "Zamjenik predsjednika", path: "/saziv/zamjenik_predsjednika" },
            { name: "Izvršni odbor", path: "/saziv/izvrsniodbor" },
            {
                name: "Generalni sekretar",
                path: "/saziv/generalni_sekretar",
            },
            { name: "Nadzorni odbor", path: "/saziv/nadzorniodbor" },
            { name: "Statutarna komisija", path: "/saziv/komisija" },
            { name: "Raniji predsjednici", path: "/saziv/predsjednici" },
        ];
    } else {
        CategoriesInfo = [
            { name: "Предсједник", path: "/saziv/predsjednik" },
            { name: "Замјеник предсједника", path: "/saziv/zamjenik_predsjednika" },
            { name: "Извршни одбор", path: "/saziv/izvrsniodbor" },
            {
                name: "Generalni sekretar",
                path: "/saziv/generalni_sekretar",
            },
            { name: "Надзорни одбор", path: "/saziv/nadzorniodbor" },
            { name: "Статутарна комисија", path: "/saziv/komisija" },
            { name: "Ранији предсједници", path: "/saziv/predsjednici" },
        ];
    }
    

    const [staff, setStaff] = useState(null);
    const location = useLocation().pathname;
    const location_id = useParams().id;

    useEffect(() => {
        window.scrollTo(0, 0);

        if (location.includes("predsjednik")) {
            const getProfile = async () => {
                const response = await fetch(
                    `https://apisindikat.skupstina.me/api/getPresident/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setStaff(data);
            };
            getProfile();
        } else if (location.includes("sekretar")) {
            const getProfile = async () => { 

                // ovaj fetch radi... na bekendu getVicePresident ipak trazi sekretara... nisam promijenio, 
                // bilo mi je muka... 
                
                const response = await fetch(
                    `https://apisindikat.skupstina.me/api/getVicePresident/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setStaff(data);
            };
            getProfile();
        } else if (location.includes("Sekretar")) {
            const getProfile = async () => {
                const response = await fetch(
                    `https://apisindikat.skupstina.me/api/getSecretary/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setStaff(data);
            };
            getProfile();
        } else if (location.includes("zamjenik")) { 
            const getProfile = async () => {
                const response = await fetch(
                    `https://apisindikat.skupstina.me/api/get_vice_president/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setStaff(data);
            };
            getProfile();

        } 
        else {
            const getProfile = async () => {
                const response = await fetch(
                    `https://apisindikat.skupstina.me/api/getProfile/${location_id}/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setStaff(data);
            };
            getProfile();
        }
    }, [location]);

    return (
        <div className="StaffSinglePage__container-main">
            <HeaderPhoto image_url={salon} page_name={""} />
            <div className="StaffSinglePage__container">
                <div className="StaffSinglePage__categories-container">
                    <Categories
                        categories={CategoriesInfo}
                        title={"KATEGORIJE"}
                    />
                </div>

                <div className="StaffSinglePage__container-left">
                    <h2>{lang === "latin" ? "Biografija" : "Биографија"}</h2>
                    {parse(
                        String(
                            lang === "latin"
                                ? staff?.nice_bio
                                : staff?.bio_cyrillic
                        )
                    )}
                </div>
                <div className="StaffSinglePage__container-right">
                    <div className="StaffSinglePage__card-container">
                        {staff !== null && staff?.active_role && (
                            <StaffCard
                                staff={staff}
                                role={
                                    lang === "latin"
                                        ? staff?.active_role[0]
                                        : staff?.active_role[1]
                                }
                            />
                        )}
                    </div>
                    {staff?.active_role &&
                        staff?.active_role[0] !== "Bivši predsjednik" && (
                            <div className="StaffSinglePage__card-info__container">
                                {/* <p>Tel: <a>{staff?.phone}</a></p> */}
                                <p>
                                    {lang == "latin" ? "Mejl: " : "Мејл: "}{" "}
                                    <a>{staff?.email}</a>
                                </p>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default StaffSinglePage;
