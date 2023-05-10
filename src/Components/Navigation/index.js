import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { People } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Inbox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import ForestIcon from "@mui/icons-material/Forest";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import { logout } from "../../Redux/user";
import { useDispatch } from "react-redux";

const ListItemComponent = ({ url, linkName, active, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton to={url}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={linkName} />
      </ListItemButton>
    </ListItem>
  );
};

const Navigation = ({ props }) => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <List>
        <ListItem>
          <Header />
        </ListItem>
      </List>
      <List>
        <ListItemComponent
          url="/"
          active
          linkName="Newsfeed"
          icon={<NewspaperIcon />}
        />
        <ListItemComponent
          url="/search"
          linkName="Search"
          icon={<SearchIcon />}
        />
        <ListItemComponent
          url="/messages"
          linkName="Messages"
          icon={<ChatIcon />}
        />
        <ListItemComponent
          url="/events"
          linkName="Events"
          icon={<ForestIcon />}
        />
        <ListItemComponent
          url="/settings"
          linkName="Settings"
          icon={<SettingsIcon />}
        />
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleSignout()} to="/">
            <ListItemText primary="Signout" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};

export default Navigation;
