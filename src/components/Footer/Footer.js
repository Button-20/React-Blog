import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="grid-footer">
        <div className="block-footer">
          <img
            src="https://assets.website-files.com/61e343b8f87fb4d287394d48/61e49bf24f9edb73ff0823ba_Logo.svg"
            loading="lazy"
            alt=""
            className="logo-footer"
          />
          <a href="#" target="_blank" className="small-link-footer">
            Powered by React
          </a>
        </div>
        <div className="block-footer-link">
          <a href="#" target="_blank" className="link-footer">
            Facebook
          </a>
          <a href="#" target="_blank" className="link-footer">
            Twitter
          </a>
          <a href="#" target="_blank" className="link-footer">
            YouTube
          </a>
        </div>
        <div className="block-footer-link">
          <a href="#" className="link-footer">
            Licensing
          </a>
          <a href="#" className="link-footer">
            Style Guide
          </a>
          <a href="#" className="link-footer">
            Changelog
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
