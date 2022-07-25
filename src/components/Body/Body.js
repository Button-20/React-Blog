import React, { useEffect, useState } from "react";
import "./Body.css";
import List from "./List/List";
import Sidebar from "./Sidebar/Sidebar";

const Body = () => {
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
    <div className="content">
      <div className="content_container">
        <div className="posts-block">
          <div className="collection-list">
            <List />
          </div>
          <div className="navigation">
            <a href="#" className="next">
              <div className="w-inline-block">Next</div>
              <svg
                className="w-pagination-next-icon"
                height="12px"
                width="12px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                transform="translate(0, 1)"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  fillRule="evenodd"
                  d="M4 2l4 4-4 4"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;
