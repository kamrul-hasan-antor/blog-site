import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="main">
      <div className="text-container">
        <h1>
          Welcome to <span>Blogex</span>{" "}
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          possimus exercitationem <br /> culpa voluptatibus laborum in
          doloremque sed? Odio, vero at.
        </p>
        <button className="btn btn-primary">
          <a href="#blogs"> Blogs </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
