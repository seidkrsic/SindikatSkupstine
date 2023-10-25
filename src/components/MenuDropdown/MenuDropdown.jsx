import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../MenuDropdown/MenuDropdown.css";

const MenuDropdown = ({ buttonName, menuItems, path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ishovered, setIshovered] = useState(false);
  const [ishoveredLine, setIshoveredLine] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleMouseEnter = () => {
    setIshovered(true);
    setIshoveredLine(true);
  };
  const handleMouseLeave = () => {
    setIshoveredLine(false);
    setIshovered(false);
  };
  const CompView = document.documentElement.clientWidth > 991;

  const showItem = { display: "flex" };
  const hideItem = { display: "none" };

  useEffect(() => {}, [CompView]);

  return (
    <>
      <li>
        <Link
          to={path}
          className="MenuDropdown__main-links"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {buttonName}
        </Link>
        <div
          style={ishovered && CompView ? showItem : hideItem}
          className="MenuDropdown__menuItems"
        >
          {menuItems?.map((item, index) => (
            <div
              key={index * 123}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="helperDiv"
            >
              <Link to={item.path}>
                {" "}
                <span>|</span>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </li>
    </>
  );
};

export default MenuDropdown;
