import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    const SendInfoOnClick = (event) => { 
        event.preventDefault();
        const fullUrl = window.location.origin + "/aktuelnosti/" + url_title;
        const decodedUrl = decodeURIComponent(fullUrl); // Decode the URL before copying
        const textToCopy = `${decodedUrl} Read more at www.sindikat.skupstina.me`;

        localStorage.setItem("NewsInfo", id);
        localStorage.setItem("NewsTitle", url_title);
        setNewsInfo(id);
        setNewsTitle(url_title);
        
        navigate("/aktuelnosti/" + url_title);
    };

    return (
        <Link
            onMouseEnter={() => ToggleHover(true)}
            onMouseLeave={() => ToggleHover(false)}
            className="FeaturesNewsCard__container"
            to={"/aktuelnosti/" + encodeURIComponent(url_title)}
            onClick={SendInfoOnClick}
            onTouchStart={SendInfoOnClick}
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
        </Link>
    );
};

export default FeaturedNewsCard;
