import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-list">
      <div className="featured-sidebar">
        <a href="#" className="link-post-featured">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3d9142f0c7aa4c4182f_thumbnail_8.jpg"
            alt="Featured Image"
          />
        </a>
        <div className="featured-text">
          <div className="featured-info">
            <a href="#" className="link-category">
              Life Style
            </a>
          </div>
          <a href="#" className="link-post-heading">
            <h6 className="post-heading">
              Are you embarrassed by your car skills? Here's what to do
            </h6>
          </a>
        </div>
      </div>
      <div className="featured-sidebar">
        <a href="#" className="link-post-featured">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a2d48e376a30a65011c7_thumbnail_3.jpg"
            alt="Featured Image"
          />
        </a>
        <div className="featured-text">
          <div className="featured-info">
            <a href="#" className="link-category">
              Design
            </a>
          </div>
          <a href="#" className="link-post-heading">
            <h6 className="post-heading">
              Brilliant documentaries and books about animation
            </h6>
          </a>
        </div>
      </div>
      <div className="featured-sidebar">
        <a href="#" className="link-post-featured">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a41b96229009f7a8565e_thumbnail_9.jpg"
            alt="Featured Image"
          />
        </a>
        <div className="featured-text">
          <div className="featured-info">
            <a href="#" className="link-category">
              Technology
            </a>
          </div>
          <a href="#" className="link-post-heading">
            <h6 className="post-heading">
              iPhone is bound to make an impact in your business
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
