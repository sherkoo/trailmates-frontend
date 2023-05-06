import React, { useState } from "react";
import Header from "../../Components/Header";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Helpers from "../../Components/Helpers";
import vars from "../../Components/vars";
import { useSelector } from "react-redux";

const Login = () => {
  const userRedux = useSelector((state) => state.user);

  const [emailError, setEmailError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const [onAlert, setAlert] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const helper = new Helpers();

  const handleSubmit = (event) => {
    helper.checker(emailValue === "" || passwordValue === "", setAlert);
    helper.checker(emailValue === "", setEmailError);
    helper.checker(passwordValue === "", setPasswordError);

    if (emailValue && passwordValue) {
      alert("Ready to login");
      setLoggedIn(true);
    }
  };

  const handleAlert = () => {
    if (onAlert) {
      return (
        <Alert severity="error">
          {vars.messages.login}
          {emailError ? <li>Email</li> : null}
          {passwordError ? <li>Password</li> : null}
        </Alert>
      );
    }
  };

  if (!loggedIn) {
    return (
      <div>
        <h1>{userRedux.userData.name}</h1>
        <h1>{userRedux.userData.age}</h1>
        <h1>{userRedux.userData.email}</h1>
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
  } else {
    return <div>Dashboard</div>;
  }
};

export default Login;
