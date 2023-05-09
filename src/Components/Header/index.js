import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Header = ({ props }) => {
  return (
    <header>
      <Typography variant="h5">
        <Link to="/">TrailMates</Link>
      </Typography>
    </header>
  );
};

export default Header;
