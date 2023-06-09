import React, { useState } from "react";
import Header from "../../Components/Header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Helpers from "../../Components/Helpers";
import vars from "../../Components/vars";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import { login } from "../../Redux/user";

const Login = () => {
  const userRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const [onAlert, setAlert] = useState(false);
  const [wrongEmailPassword, setWrongEmailPassword] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const helper = new Helpers();

  const handleSubmit = (event) => {
    helper.checker(emailValue === "" || passwordValue === "", setAlert);

    helper.checker(emailValue === "", setEmailError);

    helper.checker(passwordValue === "", setPasswordError);

    if (emailValue && passwordValue) {
      dispatch(login({ email: emailValue, password: passwordValue }));

      if (userRedux.errorMessage) {
        setWrongEmailPassword(true);
      }
    }
  };

  const handleAlert = () => {
    if (onAlert) {
      return (
        <Alert severity="error" sx={{ marginBottom: "1em" }}>
          {vars.messages.login.required}
          {emailError ? <li>Email</li> : null}
          {passwordError ? <li>Password</li> : null}
        </Alert>
      );
    }

    if (wrongEmailPassword) {
      return (
        <Alert severity="error" sx={{ marginBottom: "1em" }}>
          {vars.messages.login.wrong}
        </Alert>
      );
    }
  };

  return (
    <Grid>
      <Alert severity="info" sx={{ marginBottom: "1em" }}>
        For testing purposes use email: email, and password: password to login
      </Alert>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ padding: "1em", minWidth: "400px" }}>
          <Provider store={store}>
            <div data-testid="login-page">
              <Header />
              <h2>Login</h2>

              <Box component="form" noValidate autoComplete="off">
                <div>{handleAlert()}</div>
                <div>
                  <TextField
                    error={emailError}
                    sx={{ marginBottom: "1em" }}
                    fullWidth
                    onChange={(event) => setEmailValue(event.target.value)}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    sx={{ marginBottom: "1em" }}
                    error={passwordError}
                    fullWidth
                    onChange={(event) => setPasswordValue(event.target.value)}
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                </div>
                <Box sx={{ display: "flex", alignItems: "right" }}>
                  <Button
                    sx={{ textTransform: "none", marginBottom: "1em" }}
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Box>
                <div>
                  Don't have an account? <Link to="/register">Register</Link>
                </div>
              </Box>
            </div>
          </Provider>
        </Card>
      </Box>
    </Grid>
  );
};

export default Login;
