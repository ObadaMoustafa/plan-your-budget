import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword as createEmail,
  signInWithEmailAndPassword as loginToAccount,
  sendSignInLinkToEmail,
} from "firebase/auth";

import { auth } from "../../firebaseConfige";

import { useState } from "react";
import { actionCodeSettings } from "../../authenticationActionSettings";
import { Navigate, useOutletContext } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const isUser = useOutletContext();
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleLogin() {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        console.log("email has been sent");
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error happened", errorMessage);
      });
  }

  const fields = [
    {
      label: "Email",
      placeholder: "ex. example@email.com",
      fullWidth: true,
      value: email,
      onChange: handleEmailChange,
    },
  ];

  return (
    <>
      {isUser ? (
        <Navigate to="/" />
      ) : (
        <Card sx={{ mx: "auto" }}>
          <CardHeader title="login Form" color="primary" />
          <Grid container spacing={5}>
            {fields.map((props) => (
              <Grid key={props.label} item sm={12} md={6}>
                <TextField {...props} />
              </Grid>
            ))}
          </Grid>
          <CardActions>
            <Button variant="contained" type="submit" onClick={handleLogin}>
              Send sign in link
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}

export default Login;
