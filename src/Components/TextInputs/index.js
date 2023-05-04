import React from "react";
import "./textinputs.css";

const TextInput = ({ props, password, fullWidth, name, placeholder }) => {
  const textInputType = password ? "password" : "text";
  const textInputClass = fullWidth ? "text-fullwidth" : null;

  return (
    <input
      className={"text-input " + textInputClass}
      type={textInputType}
      name={name}
      placeholder={placeholder}
    />
  );
};

TextInput.defaultProps = {
  placeholder: "Placeholder text...",
  fullWidth: false,
};

export default TextInput;
