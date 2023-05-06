import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

PageHeader.defaultProps = {
  title: "Title goes here...",
};

export default PageHeader;
