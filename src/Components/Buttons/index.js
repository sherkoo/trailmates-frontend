import React from "react";
import "./button.css";

const Button = ({ props, primary, secondary, label, onClick }) => {
  const buttonClass = primary
    ? "primary-button"
    : secondary
    ? "secondary-button"
    : "primary-button";

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Label placeholder",
  onClick: null,
};

export default Button;
