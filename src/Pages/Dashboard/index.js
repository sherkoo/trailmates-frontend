import React from "react";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import {
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { People } from "@mui/icons-material";

const LeftRail = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "#fafafa",
      borderRight: "1px solid #eee",
      height: "100vh",
    }}
  >
    {children}
  </Box>
);

const MainContent = ({ children }) => (
  <Box sx={{ overflowY: "scroll", height: "100vh", padding: "1em" }}>
    {children}
  </Box>
);

const Dashboard = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <LeftRail>
          <Navigation />
        </LeftRail>
      </Grid>
      <Grid item xs={10}>
        <MainContent>{children}</MainContent>
      </Grid>
    </Grid>
  );
};

Dashboard.defaultProps = {
  children: "insert page here...",
};

export default Dashboard;
