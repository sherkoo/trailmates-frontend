import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Helpers from "../../Components/Helpers";
import vars from "../../Components/vars";
import Header from "../../Components/Header";
import { Grid, Box, Card } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { registration } from "../../Redux/user";

const Registration = () => {
  const dispatch = useDispatch();

  const userRedux = useSelector((state) => state.user);

  const [emailError, setEmailError] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const [alertMessage, setAlertMessage] = useState(
    vars.messages.login.required
  );

  const [password1Error, setPassword1Error] = useState(false);
  const [password1Value, setPassword1Value] = useState("");

  const [password2Error, setPassword2Error] = useState(false);
  const [password2Value, setPassword2Value] = useState("");

  const [wrongEmailPassword, setWrongEmailPassword] = useState(false);

  const [onAlert, setAlert] = useState(false);

  const helper = new Helpers();

  useEffect(() => {
    // setLoggedIn(true);
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

      if (emailValue.includes("@") && emailValue.includes(".com")) {
        dispatch(registration());
      } else {
        setAlert(true);
        setEmailError(true);
        setAlertMessage(vars.messages.login.validEmail);
      }

      // if (userRedux.errorMessage) {
      //   setWrongEmailPassword(true);
      // }
    }
  };

  const handleAlert = () => {
    if (onAlert) {
      return (
        <Alert severity="error" sx={{ marginBottom: "1em" }}>
          {alertMessage}
        </Alert>
      );
    }

    // if (wrongEmailPassword) {
    //   return (
    //     <Alert severity="error" sx={{ marginBottom: "1em" }}>
    //       {vars.messages.login.wrong}
    //     </Alert>
    //   );
    // }
  };

  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ padding: "1em", minWidth: "400px" }}>
          <Header />
          <h2>Register</h2>
          <div>{handleAlert()}</div>
          <div>
            <TextField
              fullWidth
              sx={{ marginBottom: "1em" }}
              error={emailError}
              onChange={(event) => setEmailValue(event.target.value)}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              fullWidth
              sx={{ marginBottom: "1em" }}
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
              sx={{ marginBottom: "1em" }}
              fullWidth
              type="password"
              error={password2Error}
              onChange={(event) => setPassword2Value(event.target.value)}
              id="outlined-basic"
              label="Repeat Password"
              variant="outlined"
            />
          </div>
          <div>
            <Button
              sx={{ marginBottom: "1em" }}
              onClick={handleSubmit}
              variant="contained"
            >
              Register
            </Button>
          </div>
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Card>
      </Box>
    </Grid>
  );
};

export default Registration;
