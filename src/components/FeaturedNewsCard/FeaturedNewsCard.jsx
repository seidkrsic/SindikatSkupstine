import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./FeaturedNewsCard.css";

const FeaturedNewsCard = ({ url, title, date, id, title_cyrillic, url_title }) => {

    const { setNewsInfo } = useContext(AuthContext);
    const { NewsInfo } = useContext(AuthContext);
    const { NewsTitle } = useContext(AuthContext);
    const { setNewsTitle } = useContext(AuthContext);
    const { lang } = useContext(AuthContext);
    const [IsHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    
    



    
    const ToggleHover = (boolean) => {
        setIsHovered(boolean);
    };

    const sliceTitle = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return title.slice(0, 90); // Slice to 20 characters on mobile screens
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            return title.slice(0, 90); // Slice to 40 characters on tablet screens
        } else {
            return title.slice(0, 90); // Display the full title on desktop screens
        }
    };

    const sliceTitleCyrillic = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return title_cyrillic.slice(0, 90); // Slice to 20 characters on mobile screens
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            return title_cyrillic.slice(0, 80); // Slice to 40 characters on tablet screens
        } else {
            return title_cyrillic.slice(0, 80); // Display the full title on desktop screens
        }
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };


    const SendInfoOnClick = () => { 
  
        localStorage.setItem("NewsInfo", id);
        localStorage.setItem("NewsTitle", url_title);
        setNewsInfo(id);
        setNewsTitle(url_title); 
        
    } 

    return (
        <Link
            onMouseEnter={() => ToggleHover(true)}
            onMouseLeave={() => ToggleHover(false)}
            className="FeaturesNewsCard__container"
            to={"/aktuelnosti/" + url_title} 
            onClick={()=> {SendInfoOnClick}}
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
