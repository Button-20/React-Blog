import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position) {
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
    <nav>
      <div
        className="container"
        style={{
          // background: isScrolled ? "rgba(255,255,255)" : "transparent",
          margin: isScrolled ? "0em 9em" : "2.5em 9em",
          paddingBottom: isScrolled ? "10px" : "3.5em",
          paddingTop: isScrolled ? "10px" : "",
        }}
      >
        <div className="menu-button">
          <img src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e4ea9c83acd6779728fb13_Menu.svg" />
          <div className="menu-button-text">Menu</div>
        </div>
        {/* <div className="nav-left">
        </div> */}
        <a href="#" className={isScrolled ? "logo scroll" : "logo"}>
          <img src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e49bf24f9edb73ff0823ba_Logo.svg" />
        </a>
        <div className="nav-right">
          <form action="/search" className="search w-form">
            <input
              type="search"
              className="search-nav-input w-input"
              maxLength="256"
              name="search"
              placeholder="Search"
              id="search"
              required
            />
            <input
              type="submit"
              value=""
              className="search-icon-button w-button"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
