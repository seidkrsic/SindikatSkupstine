import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import logo from "../../images/Artboard.png";
import "./ContactPage.css";
import salon from "../../images/zeleni_salon.jpg"



const ContactPage = () => {
  const { lang } = useContext(AuthContext);

  let sector;

  if (lang === "latin") {
    sector = {
      phone: "+382 68 111-222",
      email: "sindikat@skupstina.me",
      title: "Sindikalna organizacija Skupštine Crne Gore",
    };
  } else {
    sector = {
      phone: "+382 68 111-222",
      email: "sindikat@skupstina.me",
      title: "Синдикална организација Скупштине Црне Горе",
    };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Contact__container-main">
      <HeaderPhoto page_name={lang === "latin" ? "Kontakt" : "Контакт"} image_url={salon} />
      <div className="Contact__container">
        <div className="Contact__info-container">
          <h1>{lang === "latin" ? "Naša Lokacija" : "Наша Локација"}</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.424293841211!2d19.257811875668885!3d42.4399876711856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb4808ff6f23%3A0xad6daae286de4eb0!2sParliament%20of%20Montenegro!5e0!3m2!1sen!2s!4v1693400311580!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="Contact__info-container-right">
          <img src={logo} alt="" />
          <h5>{sector.title}</h5>
          <div>
            {/* <p>
              {lang === "latin" ? "Telefon:" : "Телефон:"}
              <Link>{sector.phone}</Link>
            </p> */}
            <p>
              {lang === "latin" ? "Mejl:" : "Мејл:"} <Link>{sector.email}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
