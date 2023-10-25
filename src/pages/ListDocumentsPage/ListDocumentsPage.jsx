import React, { useContext, useEffect, useState } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import pdfdownload from "../../images/pdf.png";
import "./ListDocumentsPage.css";

const ListDocumentsPage = () => {
  const { authToken } = useContext(AuthContext);
  const { lang } = useContext(AuthContext);

  const [documents, setDocuments] = useState([]);

  const getDocs = async () => {
    let response = await fetch("http://sindikat.skupstina.me/api/important/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authToken?.access),
      },
    });
    let data = await response.json();
    console.log(data);
    setDocuments(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDocs();
  }, []);

  return (
    <div className="ListDocumentsPage__container-main">
      <HeaderPhoto
        page_name={
          lang === "latin" ? "Izvještaji i dokumenta" : "Извјештаји и Документа"
        }
      />
      <h1 className="heading__scroll_div">
        {lang === "latin" ? "Važna Dokumenta" : "Важна Документа"}
      </h1>
      <div className="ListDocumentsPage__container">
        {documents?.map((item) => (
          <a
            href={item?.download_link}
            key={item?.id}
            className="ListDocumentsPage__document-container"
          >
            <img src={pdfdownload} alt="pdf" />
            <div className="ListDocumentsPage__text-container">
              <p>{lang === "latin" ? item?.title : item?.title_cyrillic}</p>
              <p className="dateFont">{item?.created_eu_time}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListDocumentsPage;
