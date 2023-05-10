import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader";
import { useSelector } from "react-redux";
import vars from "../../Components/vars";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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
    <Box p={2} sx={{ backgroundColor: "#fff" }}>
      <PageHeader title="Messages" />
      <p>From users:</p>
      {users()}
      <hr />
      <Divider />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      {messagesFromUser(messageId)}
    </Box>
  );
};

export default Messages;
