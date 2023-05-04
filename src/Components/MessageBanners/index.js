import React from "react";

const MessageBanner = ({ title, description, messageType }) => {
  const classes = messageType ? "error" : messageType ? "warning" : null;

  return (
    <div className={classes}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

MessageBanner.defaultProps = {
  title: "Sample title",
  description: "Sample description",
};

export default MessageBanner;
