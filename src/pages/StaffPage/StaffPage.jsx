import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import StaffCard from "../../components/StaffCard/StaffCard";
import AuthContext from "../../Context/AuthContext";
import "../StaffPage/StaffPage.css";

const StaffPage = () => {
  const [staff, setStaff] = useState([]);
  const { lang } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let CategoriesInfo;

  if (lang === "latin") {
    CategoriesInfo = [
      {
        name: "Izvršni odbor",
        path: "/staff/izvrsniodbor",
      },
      {
        name: "Bivši predsjednici",
        path: "/staff/predsjednici",
      },
      {
        name: "Nadzorni odbor",
        path: "/staff/nadzorni odbor",
      },

      {
        name: "Statutarna komisija",
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
        name: "Бивши предсједници",
        path: "/staff/predsjednici",
      },
      {
        name: "Надзорни одбор",
        path: "/staff/nadzorni odbor",
      },
      {  
        name: "Статутарна комисија",
        path: "/staff/komisija",
      },
    ];
  }

  const location_id = useLocation().pathname;
  const [role, setRole] = useState("");
  const [roleHeader, setRoleHeader] = useState("");

  useEffect(() => {
    if (location_id.includes("izvrsniodbor")) {
      const getStaff = async () => {
        const response = await fetch(
          `http://apisindikat.skupstina.me/api/getBoardMembers/`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        let data = await response.json();
        setRole(lang === "latin" ? "Izvršni odbor" : "Извршни oдбор");
        setRoleHeader(lang === "latin" ? "Izvršni odbor" : "Извршни oдбор");

        setStaff(data);
      };
      getStaff();
    } else if (location_id.includes("komisija")) {
      const getStaff = async () => {
        const response = await fetch(
          `http://apisindikat.skupstina.me/api/getCommission/`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        let data = await response.json();
        setRole(
          lang === "latin" ? "Statutarna komisija" : "Статутарна комисија"
        );
        setRoleHeader(
          lang === "latin" ? "Statutarna komisija" : "Статутарна комисија"
        );
        setStaff(data);
      };
      getStaff();
    } else if (location_id.includes("predsjednici"))  {
      const getStaff = async () => {
        const response = await fetch(
          `http://apisindikat.skupstina.me/api/getPresidents/`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        let data = await response.json();
        setRole(lang === "latin" ? "Bivši predsjednik" : "Бивши предсједник");
        setRoleHeader(
          lang === "latin" ? "Bivši predsjednici" : "Бивши предсједници"
        );
        setStaff(data);
      };
      getStaff();
    } else { 
      const getStaff = async () => {
        const response = await fetch(
          `http://apisindikat.skupstina.me/api/getMainBoardMembers/`,
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
      <HeaderPhoto page_name={roleHeader} />

      <div className="StaffPage__container">
        <div className="StaffPage__staff-main">
          <div className="StaffPage__staff-left">
            {staff?.map((person) => (
              <StaffCard key={person.id} staff={person} role={role} />
            ))}
          </div>
          <div className="StaffPage__staff-right">
            <Categories
              categories={CategoriesInfo}
              title={lang === "latin" ? "Kategorije" : "Категорије"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
