import React from "react";

const Card = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.defaultProps = {
  title: "Sample title",
  description: "Sample description",
};

export default Card;
