import React from "react";
import { Link } from "react-router-dom";

const Header = ({ props }) => {
  return (
    <header>
      <h2>
        <Link to="/">TrailMates</Link>
      </h2>
    </header>
  );
};

export default Header;
