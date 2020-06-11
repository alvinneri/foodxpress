import React from "react";
import { Link } from "react-router-dom";

import image from "../images/hero.jpg";
import { from } from "apollo-boost";

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
        <Link className="btn btn-dark" to="/menu">
          VIEW MENU
        </Link>
      </div>
    </div>
  );
};

export default Hero;
