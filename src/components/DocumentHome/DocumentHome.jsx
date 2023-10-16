import React, { useContext } from "react";
import "./DocumentHome.css";
import { Link } from "react-router-dom";
import pdfdownload from "../../images/pdf.png";
import AuthContext from "../../Context/AuthContext";

const DocumentHome = ({ document }) => {
  const { lang } = useContext(AuthContext);

  return (
    <div className="Document__container">
      <img src={pdfdownload} alt="pdf" />

      <div className="Document__container-info">
        <a href={document.download_link}>
          {lang === "latin" ? document.title : document.title_cyrillic}
        </a>
        <p>{document.created_eu_time}</p>
      </div>
    </div>
  );
};

export default DocumentHome;
