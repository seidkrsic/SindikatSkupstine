import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import StaffCard from "../../components/StaffCard/StaffCard";
import AuthContext from "../../Context/AuthContext";
import "../StaffSinglePage/StaffSinglePage.css";
import parse from "html-react-parser";


const StaffSinglePage = () => {
  let CategoriesInfo;
  const { lang } = useContext(AuthContext);

  if (lang === "latin") {
    CategoriesInfo = [
      {
        name: "Izvršni odbor",
        path: "/staff/izvrsniodbor",
      },
      {
        name: "Bivši Predsjednici",
        path: "/staff/predsjednici",
      },
      {
        name: "Statutarna Komisija",
        path: "/staff/komisija",
      },
    ];
  } else {
    CategoriesInfo = [
      {
        name: "Извршни одбор",
        path: "/staff/izvrsniodbor",
      },
      {
        name: "Бивши Предсједници",
        path: "/staff/predsjednici",
      },
      {
        name: "Статутарна Комисија",
        path: "/staff/komisija",
      },
    ];
  }

  const [staff, setStaff] = useState({});
  const location = useLocation().pathname;
  const location_id = useParams().id;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.includes("predsjednik")) {
      const getProfile = async () => {
        const response = await fetch(
          `http://apisindikat.skupstina.me/api/getPresident/`,
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
          `http://apisindikat.skupstina.me/api/getVicePresident/`,
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
          `http://apisindikat.skupstina.me/api/getSecretary/`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        let data = await response.json();
        setStaff(data);
      };
      getProfile();
    } else {
      const getProfile = async () => {
        const response = await fetch(
          `http://apisindikat.skupstina.me/api/getProfile/${location_id}/`,
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
      <HeaderPhoto
        page_name={lang === "latin" ? staff?.name : staff?.name_cyrillic}
      />
      <div className="StaffSinglePage__container">
        <div className="StaffSinglePage__categories-container">
          <Categories categories={CategoriesInfo} title={"KATEGORIJE"} />
        </div>

        <div className="StaffSinglePage__container-left">
          <h2>{lang === "latin" ? "Biografija" : "Биографија"}</h2>
          <p>{parse(
                  String(
                    lang === "latin" ? staff?.bio : staff?.bio_cyrillic
                  )
                )}
          </p>
        </div>
        <div className="StaffSinglePage__container-right">
          <div className="StaffSinglePage__card-container">
            {staff?.active_role && (
              <StaffCard
                staff={staff}
                role={
                  lang === "latin" ? staff?.active_role[0] : staff?.active_role[1]
                }
              />
            )}
          </div>
          {staff?.active_role && (
            <>
                {staff.active_role[0] !== "Bivši predsjednik"  || 
                staff.active_role[1] !== "Бивши предсјednik" ? (
                  <div className="StaffSinglePage__contact-info">
                    <div>
                      {lang === "latin" ? "Telefon:" : "Телефон:"}
                      <Link>{staff?.phone}</Link>
                    </div>
                    <div>
                      {lang === "latin" ? "Mejl:" : "Мејл:"} <Link>{staff?.email}</Link>
                    </div>
                  </div>
                ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffSinglePage;
