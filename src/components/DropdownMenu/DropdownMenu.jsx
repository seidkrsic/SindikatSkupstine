import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./DropdownMenu.css"
import { Link } from 'react-router-dom';

const DropdownMenu = ({ buttonName, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ishovered, setIshovered] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HoveredToggle = (state) => { 
      setIshovered(state)
  }

  const handleMouseEnter = () => {
    setIsMenuOpen(true)

  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false)
  };

  return (
    <motion.div
                className="dropdown-menu"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                style={{backgroundColor: ishovered?  "a67c00 !important " : "white" }}
                    >
        <Link to="">{buttonName}</Link>
        {isMenuOpen && menuItems != undefined && (
        <motion.ul
                    className="menu-items"
                    style={{backgroundColor: isMenuOpen?  "a67c00 " : "white" }}
                    onMouseEnter={() => HoveredToggle(true)}
                    onMouseLeave={() => HoveredToggle(false)}
                    >
            {menuItems?.map((item, index) => (
            <motion.li
                        key={index}
                        className={"first-menu-item"}
                        >
                        {item}
            </motion.li>
            ))}
        </motion.ul>
        )}
    </motion.div>
  );
};

export default DropdownMenu;
