import React from "react";
import rainbow_bridge from "../../images/rainbow-bridge.jpg";
import "../HeaderPhoto/HeaderPhoto.css";

const HeaderPhoto = ({ page_name, image_url }) => {
  return (
    <div className="HeaderPhoto__container">
      <img src={image_url !== null ? image_url : rainbow_bridge} alt="logo" />
      <div className="HeaderPhoto__view-name__container">
        <h1>{page_name}</h1>
      </div>
    </div>
  );
};

export default HeaderPhoto;
