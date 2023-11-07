import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import closeMenu from "../../images/closeMenu.png";
import "../NewsGallery/NewsGallery.css";

const NewsGallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fullScreen, setfullScreen] = useState(false);

  const HandleFullScreen = () => setfullScreen(!fullScreen);

  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    if (fullScreen) {
      document.querySelector("body").style.overflow = "hidden";
      document.querySelector(".menuCopy__container").style.display = "none";
      document.querySelector(".footer_center").style.zIndex = -1;
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.querySelector("body").style.overflow = "auto";
      document.querySelector(".menuCopy__container").style.display = "flex";
      document.querySelector(".footer_center").style.zIndex = 0;
    }

    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [fullScreen]);

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

  return (
    <motion.div
      onMouseEnter={showArrows}
      onMouseLeave={hideArrows}
      className="NewsGallery__container"
    >
      <motion.div
        className={
          fullScreen
            ? "NewsGallery__container-Image full-screen"
            : "NewsGallery__container-Image"
        }
        key={currentIndex}
        onClick={!fullScreen ? HandleFullScreen : undefined}
        initial={{ offsetX: currentIndex % 2 === 0 ? -100 : 100, opacity: 1 }}
        animate={{ x: 0, opacity: 1, animationDuration: 2 }}
        transition={{ duration: 3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
          style={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={onToPrevious}
          className={
            fullScreen
              ? "NewsGallery__leftArrow showArrows-left"
              : "NewsGallery__leftArrow"
          }
        >
          ❮
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20 }}
          style={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={onToNext}
          className={
            fullScreen
              ? "NewsGallery__rightArrow showArrows-right"
              : "NewsGallery__rightArrow"
          }
        >
          ❯
        </motion.div>

        {fullScreen ? (
          <img
            onClick={HandleFullScreen}
            className="CloseIcon"
            src={closeMenu}
            alt="x"
          />
        ) : (
          <></>
        )}

        <img
          className={fullScreen ? "full-screen1" : ""}
          src={`${slides[currentIndex+1]?.image_url}`}
          alt="slide-img"
        />

        <div className="NewsGallery__NewInfo">
          <h1>{fullScreen ? "" : "+" + (slides.length - 1)}</h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewsGallery;
