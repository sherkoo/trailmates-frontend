import React from "react";
import Header from "../../Components/Header";

const NotFound = ({ message }) => {
  return (
    <div>
      <Header />
      <h1>{message}</h1>
      <p>sorry try going back</p>
    </div>
  );
};

NotFound.defaultProps = {
  message: "page not found",
};

export default NotFound;
