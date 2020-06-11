import React from "react";

import image from "../images/hero.jpg";

const Hero = () => {
  return (
    <div
      className="container-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="mask"></div>
      <div className="margin d-flex-center">
        <p>Fresh and Local</p>
        <h1>Fresh Food Everyday</h1>
        <a href="#" className="btn btn-dark">
          view menu
        </a>
      </div>
    </div>
  );
};

export default Hero;
