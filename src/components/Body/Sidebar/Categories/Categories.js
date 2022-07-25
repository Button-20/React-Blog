import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="category-list">
      <a href="#" className="link-categories">
        <div className="outline-circle">
          <div className="filled-circle"></div>
        </div>
        <h5 className="category-heading">Design</h5>
      </a>
      <a href="#" className="link-categories">
        <div className="outline-circle">
          <div className="filled-circle"></div>
        </div>
        <h5 className="category-heading">Photographs</h5>
      </a>
      <a href="#" className="link-categories">
        <div className="outline-circle">
          <div className="filled-circle"></div>
        </div>
        <h5 className="category-heading">Interior</h5>
      </a>
      <a href="#" className="link-categories">
        <div className="outline-circle">
          <div className="filled-circle"></div>
        </div>
        <h5 className="category-heading">Technology</h5>
      </a>
      <a href="#" className="link-categories">
        <div className="outline-circle">
          <div className="filled-circle"></div>
        </div>
        <h5 className="category-heading">Life Style</h5>
      </a>
    </div>
  );
};

export default Categories;
