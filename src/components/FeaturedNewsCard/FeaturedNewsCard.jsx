import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./FeaturedNewsCard.css";

const FeaturedNewsCard = ({ url, title, date, id, title_cyrillic, url_title }) => {
    const { setNewsInfo, setNewsTitle, lang } = useContext(AuthContext);
    const [IsHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate = useNavigate();

    const ToggleHover = (boolean) => {
        setIsHovered(boolean);
    };

    const sliceTitle = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return title.slice(0, 90);
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            return title.slice(0, 90);
        } else {
            return title.slice(0, 90);
        }
    };

    const sliceTitleCyrillic = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return title_cyrillic.slice(0, 90);
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            return title_cyrillic.slice(0, 80);
        } else {
            return title_cyrillic.slice(0, 80);
        }
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const SendInfoOnClick = (event) => { 
        event.preventDefault();
        const encodedUrlTitle = encodeURIComponent(url_title);
        localStorage.setItem("NewsInfo", id);
        localStorage.setItem("NewsTitle", encodedUrlTitle);
        setNewsInfo(id);
        setNewsTitle(encodedUrlTitle);
        navigate("/aktuelnosti/" + encodedUrlTitle);
    };

    return (
        <div
            onMouseEnter={() => ToggleHover(true)}
            onMouseLeave={() => ToggleHover(false)}
            className="FeaturesNewsCard__container"
            onClick={SendInfoOnClick}
        >
            <div className="FeaturesNewsCard__img-container">
                <motion.img
                    animate={{ scale: IsHovered ? 1.008 : 1 }}
                    src={url}
                    alt=""
                    onLoad={handleImageLoad}
                    style={{ display: imageLoaded ? "block" : "none" }}
                />
            </div>
            <div id="title" className="FeaturesNewsCard__info-container">
                <h1>
                    {lang === "latin" ? sliceTitle() : sliceTitleCyrillic()}
                </h1>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default FeaturedNewsCard;
