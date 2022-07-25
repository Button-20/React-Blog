import React from "react";
import "./List.css";

// This component is used to display the list of posts.

const List = () => {
  return (
    <>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a4b516f8db6e392c8d78_thumbnail_13.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Life Style
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">
              The next 7 things to immediately do about car
            </h2>
          </a>
          <p className="post-summary">
            Habitant proin nec ac, sed nulla arcu elementum. Laoreet in facilisi
            varius sed faucibus. Accumsan leo fusce dolor sit ac.
          </p>
        </div>
      </div>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a48f2cfee655d66dc21c_thumbnail_12.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Technology
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">Cosmonauts prep for spacewalk</h2>
          </a>
          <p className="post-summary">
            Morbi nisl, pellentesque enim amet, vitae adipiscing elit.
            Sollicitudin feugiat eu, velit sit pellentesque suscipit. Id feugiat
            consectetur.
          </p>
        </div>
      </div>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a46c87eb451645c627af_thumbnail_11.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Life Style
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">
              Best blog hosting services, detailed comparison
            </h2>
          </a>
          <p className="post-summary">
            Adipiscing eu non dignissim varius leo faucibus. Ultricies
            scelerisque elit leo erat. Pellentesque scelerisque arcu id.
          </p>
        </div>
      </div>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a44b12077724406cfc85_thumbnail_10.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Interior
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">
              5 Must-haves before embarking on interior
            </h2>
          </a>
          <p className="post-summary">
            Enim enim pharetra dignissim tellus. Purus egestas fringilla aliquet
            praesent non, volutpat scelerisque porttitor. Facilisi at amet sed
            fermentum.
          </p>
        </div>
      </div>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a41b96229009f7a8565e_thumbnail_9.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Technology
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">
              iPhone is bound to make an impact in your business
            </h2>
          </a>
          <p className="post-summary">
            Mauris sodales faucibus risus donec. Eu, nibh morbi egestas at
            congue a odio velit massa. Suspendisse elit purus eros, habitant
            sem.
          </p>
        </div>
      </div>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3d9142f0c7aa4c4182f_thumbnail_8.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Life Style
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">
              Are you embarrassed by your car skills? Here's what to do
            </h2>
          </a>
          <p className="post-summary">
            Lacus blandit massa risus, mauris tempor. Tortor mauris, neque ac
            mauris vitae eget et. Interdum duis pellentesque eros risus
            sagittis.
          </p>
        </div>
      </div>
      <div className="collection-item">
        <a href="#">
          <img
            src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3a2fc4ea78d8c735476_thumbnail_7.jpg"
            alt="Post Image"
          />
        </a>
        <div className="post-text">
          <div className="post-info">
            <a href="#" className="link-category">
              Photographs
            </a>
            <div className="date">Jan 16, 2022</div>
          </div>
          <a href="#" className="link-post-heading w-inline-block">
            <h2 className="post-heading list">
              How 7 things will change the way you approach photographs
            </h2>
          </a>
          <p className="post-summary">
            Tincidunt dolor neque, risus aliquet ac cursus sodales placerat.
            Elit, nisl convallis diam imperdiet feugiat. Sagittis, neque
            commodo.
          </p>
        </div>
      </div>
    </>
  );
};

export default List;
