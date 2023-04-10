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

import { useRef, useState } from "react";
import { actionCodeSettings } from "../../authenticationActionSettings";
import { Navigate, useOutletContext } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";

function Login() {
  const buttonRef = useRef();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const isUser = useOutletContext();
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        console.log("email has been sent");
        window.localStorage.setItem("emailForSignIn", email);
        setSuccess(true);
        buttonRef.current.disable = true;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
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
        <>
          <Card sx={{ mx: "auto" }}>
            <CardHeader title="login Form" color="primary" />
            <form onSubmit={handleLogin}>
              <Grid container spacing={5}>
                {fields.map((props) => (
                  <Grid key={props.label} item sm={12} md={6}>
                    <TextField {...props} />
                  </Grid>
                ))}
              </Grid>
              <CardActions>
                <Button variant="contained" type="submit" itemRef={buttonRef}>
                  Send sign in link
                </Button>
              </CardActions>
            </form>
          </Card>
          {error && <ErrorMsg msg={error} />}
        </>
      )}
    </>
  );
}

export default Login;
