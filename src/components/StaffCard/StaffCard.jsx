import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./StaffCard.css";

const StaffCard = ({ staff, role }) => {
  const { lang } = useContext(AuthContext);

  const [IsHoverd, setIsHovered] = useState(false);
  const ToggleHovered = (boolean) => {
    setIsHovered(boolean);
  };

  // style={{overflow: "hidden", border: "1px solid green"}}
  return (
    <div className="Staff__container">
      <Link to={"/saziv/" + staff.id} className="Staff__img-container">
        <motion.img
          animate={{ scale: IsHoverd ? 1.2 : 1 }}
          src={staff?.profile_image}
          alt="staff_img"
          onMouseEnter={() => ToggleHovered(true)}
          onMouseLeave={() => ToggleHovered(false)}
        />
      </Link>

      <div className="Staff__info-container">
        <h1>{lang === "latin" ? staff?.name : staff?.name_cyrillic}</h1>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default StaffCard;
