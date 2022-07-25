import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Featured from "./Featured/Featured";
import "./Sidebar.css";
import Tags from "./Tags/Tags";

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="sidebar"
      style={{ paddingTop: isScrolled ? "50px" : "0px" }}
    >
      <div className="col">
        <div className="text-sidebar">Categories</div>
        <Categories />
      </div>
      <div className="col">
        <div className="text-sidebar">Featured</div>
        <Featured />
      </div>
      <div className="col">
        <div className="text-sidebar">Tags</div>
        <Tags />
      </div>
    </div>
  );
};

export default Sidebar;
