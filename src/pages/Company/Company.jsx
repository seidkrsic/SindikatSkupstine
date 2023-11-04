import React, { useContext, useEffect, useState } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import pdfdownload from "../../images/pdf.png";
import "../Company/Company.css";


const Company = () => {
  const { user } = useContext(AuthContext);
  const { lang } = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await fetch("http://apisindikat.skupstina.me/api/companies/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCompanies(data);
      } catch (error) {
        console.error("There was an error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Company__container">
      <HeaderPhoto
        page_name={
          lang === "latin" ? "Ugovori sa Firmama" : "Уговори са Фирмама"
        }
      />
      <table border="1" className="gold-table">
        <thead>
          <tr>
            <th className="gold-light-opacity">
              {lang === "latin" ? "NAZIV FIRME" : "НАЗИВ ФИРМЕ"}
            </th>
            <th className="gold-medium-opacity">
              {lang === "latin" ? "ADRESA" : "АДРЕСА"}
            </th>
            <th className="gold-dark-opacity">
              {lang === "latin" ? "BROJ RATA" : "БРОЈ РАТА"}
            </th>
            {user && (
              <th className="gold-darkest-opacity">
                {lang === "latin" ? "UGOVOR" : "УГОВОР"}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {companies &&
            companies.map((item, index) => (
              <tr key={index}>
                <td>
                  {/* {lang === "latin"
                    ? item?.company_name
                    : item?.company_name_cyrillic} */}
                    {item?.company_name}
                </td>
                <td>
                  {lang === "latin"
                    ? item?.company_address
                    : item?.company_address_cyrillic}
                </td>
                <td>{item?.rates}</td>
                {user && (
                  <td className="special__column">
                    <img className="pdf_image" src={pdfdownload} alt="pdf" />
                    <a href={item?.document.download_link}>
                      {lang === "latin" ? "Ugovor" : "Уговор"}
                    </a>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Company;
