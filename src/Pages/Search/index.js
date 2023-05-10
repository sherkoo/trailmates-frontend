import React from "react";
import Header from "../../Components/Header";
import { useSelector } from "react-redux";
import PageHeader from "../../Components/PageHeader";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Dashboard = () => {
  const user = useSelector((state) => state.user.userData);

  return (
    <div>
      <PageHeader title="Search" />
      <Box p={2} sx={{ backgroundColor: "#fff" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <div>Your search results will show here</div>
      </Box>
    </div>
  );
};

export default Dashboard;
