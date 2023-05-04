import React, { useState } from "react";
import Header from "../../Components/Header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";

const Login = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const [onAlert, setAlert] = useState(false);

  const handleSubmit = () => {
    if (emailValue === "" || passwordValue === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }

    if (emailValue === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (passwordValue === "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (emailValue && passwordValue) {
      alert("Ready to login");
    }
  };

  const handleAlert = () => {
    if (onAlert) {
      return (
        <Alert severity="error">
          All fields required. Fill in the following fields:
          {emailError ? <li>Email</li> : null}
          {passwordError ? <li>Password</li> : null}
        </Alert>
      );
    }
  };

  return (
    <div>
      <Header />
      <h2>Login</h2>
      <Box component="form" noValidate autoComplete="off">
        <div>{handleAlert()}</div>
        <div>
          <TextField
            error={emailError}
            onChange={(event) => setEmailValue(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            error={passwordError}
            onChange={(event) => setPasswordValue(event.target.value)}
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
        </div>
        <div>
          <Button onClick={handleSubmit} variant="contained">
            Login
          </Button>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </Box>
    </div>
  );
};

export default Login;
