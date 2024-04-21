import { React, useContext, useEffect } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import logo from "../../images/Artboard.png";
import "../LoginPage/LoginPage.css";
import salon from "../../images/Zgrada_skupstine.jpg";

const LoginPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { userLogin } = useContext(AuthContext);
    const { lang } = useContext(AuthContext);

    return (
        <div className="LoginPage__container">
            <HeaderPhoto page_name={ lang === "latin" ? "PRIJAVA KORISNIKA" : "ПРИЈАВА КОРИСНИКА"} image_url={salon} />
            <div className="LoginPage__img-container">
                <img src={logo} alt="" />
            </div>
            <form onSubmit={userLogin}>
                <p>{ lang == "latin" ? "Korisničko ime" : "Корисничко име"}</p>
                <input
                    autoFocus
                    id="LoginPage-input"
                    type="text"
                    name="username"
                    placeholder={ lang == "latin" ? "Korisničko ime" : "Корисничко име"}
                />
                <p>{lang == "latin" ? "Lozinka" : "Лозинка"}</p>
                <input
                    id="LoginPage-input2"
                    type="password"
                    name="password"
                    placeholder={lang == "latin" ? "Lozinka" : "Лозинка"}
                />
                <button id="LoginPage-input_button">{lang == "latin" ? "Uloguj se" : "Улогуј се"}</button>
            </form>
        </div>
    );
};

export default LoginPage;
