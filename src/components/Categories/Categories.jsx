import React from "react";
import "../Categories/Categories.css";
import { Link } from "react-router-dom";

const Categories = ({ categories, title }) => {

  return (
    <div className="Categories__main-container">
      <h1 className="Categories__heading">{title}</h1>
      <div className="Categories__container">
        {categories.map((category) => (
          <Link to={category.path} key={category.path}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
