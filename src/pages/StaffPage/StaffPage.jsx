import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import StaffCard from "../../components/StaffCard/StaffCard";
import AuthContext from "../../Context/AuthContext";
import "../StaffPage/StaffPage.css";
import salon from "../../images/PlavaSala.jpg";
import { Helmet } from "react-helmet";

const StaffPage = () => {
    const [staff, setStaff] = useState([]);
    const { lang } = useContext(AuthContext);
    const { domain_url } = useContext(AuthContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let CategoriesInfo;

    if (lang === "latin") {
        CategoriesInfo = [
            { name: "Predsjednik", path: "/saziv/predsjednik" },
            { name: "Zamjenik predsjednika", path: "/saziv/zamjenik" },
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
            { name: "Замјеник предсједника", path: "/saziv/zamjenik" },
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
    

    const location_id = useLocation().pathname;
    const [role, setRole] = useState("");
    const [roleHeader, setRoleHeader] = useState("");

    useEffect(() => {
        if (location_id.includes("izvrsniodbor")) {
            const getStaff = async () => {
                const response = await fetch(
                    `${domain_url}api/getBoardMembers/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setRole(lang === "latin" ? "Izvršni odbor" : "Извршни oдбор");
                setRoleHeader(
                    lang === "latin" ? "Izvršni odbor" : "Извршни oдбор"
                );

                setStaff(data);
            };
            getStaff();
        } else if (location_id.includes("komisija")) {
            const getStaff = async () => {
                const response = await fetch(
                    `${domain_url}api/getCommission/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setRole(
                    lang === "latin"
                        ? "Statutarna komisija"
                        : "Статутарна комисија"
                );
                setRoleHeader(
                    lang === "latin"
                        ? "Statutarna komisija"
                        : "Статутарна комисија"
                );
                setStaff(data);
            };
            getStaff();
        } else if (location_id.includes("predsjednici")) {
            const getStaff = async () => {
                const response = await fetch(
                    `${domain_url}api/getPresidents/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setRole(
                    lang === "latin"
                        ? "Raniji predsjednici"
                        : "Ранији предсједници"
                );
                setRoleHeader(
                    lang === "latin"
                        ? "Raniji predsjednici"
                        : "Ранији предсједници"
                );
                setStaff(data);
            };
            getStaff();
        } else if (location_id.includes("nadzorniodbor")) {
            const getStaff = async () => {
                const response = await fetch(
                    `${domain_url}api/getMainBoardMembers/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );
                let data = await response.json();
                setRole(lang === "latin" ? "Nadzorni odbor" : "Надзорни одбор");
                setRoleHeader(
                    lang === "latin" ? "Nadzorni odbor" : "Надзорни одбор"
                );
                setStaff(data);
            };
            getStaff();
        }

        window.scrollTo(0, 0);
    }, [location_id]);

    return (
        <div className="StaffPage__container-Big">
                <Helmet>
                    <link rel="canonical" href="https://sindikat.skupstina.me/saziv" />
                </Helmet>
            <HeaderPhoto image_url={salon} page_name={roleHeader} />

            <div className="StaffPage__container">
                <div className="StaffPage__staff-main">
                    <div className="StaffPage__staff-left">
                        {staff?.map((person) => (
                            <StaffCard
                                key={person.id}
                                staff={person}
                                role={role}
                            />
                        ))}
                    </div>
                    <div className="StaffPage__staff-right">
                        <Categories
                            categories={CategoriesInfo}
                            title={
                                lang === "latin" ? "Kategorije" : "Категорије"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StaffPage;
