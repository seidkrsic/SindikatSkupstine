import React from "react";
import "./LogoOnly.css";
import logo from "../../images/Artboard.png";

const LogoOnly = () => {
  return (
    <div className="LogoOnly__container">
      <img src={logo} alt="" />
    </div>
  );
};

export default LogoOnly;
