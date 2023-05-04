import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <h2>Register</h2>
      <div>
        <TextField />
        <TextField type="password" />
        <TextField type="password" />
      </div>
      <div>
        <Button>Register</Button>
      </div>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Registration;
