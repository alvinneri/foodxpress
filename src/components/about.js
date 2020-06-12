import React from "react";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className=" about purchase container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h3>About the Application</h3>
      <p>
        This application is build using reactjs. This application consumes data
        from a API build in NODEJS and GraphQL. The database used is just web
        sql database for demo purposes. The link for code source of this
        application is at my{" "}
        <a href="https://github.com/alvinneri/foodxpress" target="_blank">
          github
        </a>{" "}
        repository as well as for the{" "}
        <a
          href="https://github.com/alvinneri/edamam-Api-Server"
          target="_blank"
        >
          API Server.
        </a>
      </p>
      <Link to="/" className="btn btn-pur">
        Go Back
      </Link>
    </div>
  );
};

export default About;
