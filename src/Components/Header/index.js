import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Header = ({ props }) => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography variant="h6" component="h2" sx={{ cursor: "pointer" }}>
          🏕 TrailMates
        </Typography>
      </Link>
    </header>
  );
};

export default Header;
