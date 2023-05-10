import React from "react";
import Typography from "@mui/material/Typography";

const PageHeader = ({ title }) => {
  return (
    <div>
      <Typography mb={2} variant="h4">
        {title}
      </Typography>
    </div>
  );
};

PageHeader.defaultProps = {
  title: "Title goes here...",
};

export default PageHeader;
