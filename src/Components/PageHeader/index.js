import React from "react";
import Typography from "@mui/material/Typography";

const PageHeader = ({ title }) => {
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
    </div>
  );
};

PageHeader.defaultProps = {
  title: "Title goes here...",
};

export default PageHeader;
