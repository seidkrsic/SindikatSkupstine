import { motion } from "framer-motion";
import parse from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const { lang } = useContext(AuthContext);
    const { setNewsInfo } = useContext(AuthContext);
    const { setNewsTitle } = useContext(AuthContext);
    
    
    const SendInfoOnClick = (id, title) => { 
        localStorage.setItem("NewsInfo", id);
        localStorage.setItem("NewsTitle", title);
        setNewsInfo(id);
        setNewsTitle(title);
    };


    

    const sliceTitle = (title) => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return title?.length > 70 ? title?.slice(0, 70) + "..." : title;
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            return title?.length > 100 ? title?.slice(0, 100) + "..." : title;
        } else {
            return title?.length > 100 ? title?.slice(0, 100) + "..." : title;
        }
    };

    const sliceContent = (content) => {
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            return content?.length > 65
                ? content?.slice(0, 65) + "..."
                : content;
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            return content?.length > 200
                ? content?.slice(0, 200) + "..."
                : content;
        } else {
            return content?.length > 180
                ? content?.slice(0, 180) + "..."
                : content;
        }
    };

    const showArrows = () => {
        setIsHovered(true);
    };

    const hideArrows = () => {
        setIsHovered(false);
    };

    const onToPrevious = () => {
        const isFirstIndex = currentIndex === 0;
        const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const onToNext = () => {
        const isLastIndex = currentIndex === slides.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        // Auto slide every 5 seconds
        const intervalId = setInterval(() => {
            onToNext();
        }, 5000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex]);

    return (
        <motion.div
            onMouseEnter={showArrows}
            onMouseLeave={hideArrows}
            className="ImageSlider__container"
        >
            <motion.div
                className={"ImageSlider__container-Image"}
                key={currentIndex}
                initial={{
                    offsetX: currentIndex % 2 === 0 ? -100 : 100,
                    opacity: 0.8,
                }}
                animate={{ x: 0, opacity: 1, animationDuration: 2 }}
                transition={{ duration: 3 }}
            >
                <img
                    src={`${slides[currentIndex]?.image_url}`}
                    alt=""
                    style={{ display: imageLoaded ? "block" : "none" }}
                    onLoad={() => setImageLoaded(true)}
                />

                <Link
                    to={"/aktuelnosti/" + slides[currentIndex]?.url_title}
                    className="NewInfo"
                    onClick={SendInfoOnClick(slides[currentIndex]?.id, slides[currentIndex]?.url_title)} 
                >
                    <h1>
                        {lang === "latin"
                            ? sliceTitle(slides[currentIndex]?.nice_title)
                            : sliceTitle(slides[currentIndex]?.title_cyrillic)}
                    </h1>
                    {/* {lang === "latin"
            ? parse(String(sliceContent(slides[currentIndex]?.nice_content)))
            : parse(
                String(sliceContent(slides[currentIndex]?.content_cyrillic))
              )} */}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : -20,
                    }}
                    style={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={onToPrevious}
                    className="leftArrow"
                >
                    ❮
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : -20,
                    }}
                    style={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={onToPrevious}
                    className="rightArrow"
                >
                    ❯
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ImageSlider;
