import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader";
import { useSelector } from "react-redux";
import vars from "../../Components/vars";
import { Button } from "@mui/material";
const Messages = () => {
  const messages = useSelector((state) => state.messages);
  const [messageId, setMessageId] = useState(2);

  const users = () => {
    return messages.map((m, index) => (
      <Button onClick={() => handleMessageChange(m.user.id)} index={index}>
        {m.user.name}test
      </Button>
    ));
  };

  const handleMessageChange = (id) => {
    setMessageId(id);
  };

  const messagesFromUser = (id) => {
    const message = messages.find((m) => m.user.id === id);
    if (message) {
      return message.messages.map((m, index) => <div>{m.title}</div>);
    } else {
      return vars.messages.users.noUserFound;
    }
    // return message ?
    //   message.user.name
    //   : vars.messages.users.noUserFound;
  };

  return (
    <div>
      <PageHeader title="Messages" />
      <p>From users:</p>
      {users()}
      <hr />
      {messagesFromUser(messageId)}
    </div>
  );
};

export default Messages;
