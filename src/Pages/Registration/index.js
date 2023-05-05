import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Helpers from "../../Components/Helpers";
import vars from "../../Components/vars";
import Header from "../../Components/Header";

const Registration = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const [password1Error, setPassword1Error] = useState(false);
  const [password1Value, setPassword1Value] = useState("");

  const [password2Error, setPassword2Error] = useState(false);
  const [password2Value, setPassword2Value] = useState("");

  const [onAlert, setAlert] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const helper = new Helpers();

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  const handleSubmit = (event) => {
    helper.checker(
      emailValue === "" || password1Value === "" || password2Value === "",
      setAlert
    );
    helper.checker(emailValue === "", setEmailError);
    helper.checker(password1Value === "", setPassword1Error);
    helper.checker(password2Value === "", setPassword2Error);

    if (emailValue && password1Value && password2Value) {
      const credentials = {
        email: emailValue,
        password: password1Value,
        password2: password2Value,
      };
      console.log(credentials);
      setLoggedIn(true);
    }
  };

  const handleAlert = () => {
    if (onAlert) {
      return (
        <Alert severity="error">
          {vars.messages.login}
          {emailError ? <li>Email</li> : null}
          {password1Error || password2Error ? <li>Password</li> : null}
        </Alert>
      );
    }
  };

  if (!loggedIn) {
    return (
      <div>
        <Header />
        <h2>Register</h2>
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
            error={password1Error}
            type="password"
            onChange={(event) => setPassword1Value(event.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            type="password"
            error={password2Error}
            onChange={(event) => setPassword2Value(event.target.value)}
            id="outlined-basic"
            label="Repeat Password"
            variant="outlined"
          />
        </div>
        <div>
          <Button onClick={handleSubmit} variant="contained">
            Register
          </Button>
        </div>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export default Registration;
