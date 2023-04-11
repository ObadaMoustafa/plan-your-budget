import {
  Button,
  Card,
  CardActions,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  createUserWithEmailAndPassword as createEmail,
  signInWithEmailAndPassword as loginToAccount,
} from "firebase/auth";

import { auth } from "../../firebaseConfige";

import { useState } from "react";
import { Navigate, useOutletContext } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const isUser = useOutletContext();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleEmailPassword(e) {
    setPassword(e.target.value);
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSignUp() {
    setError(null);
    createEmail(auth, email, password).catch((error) =>
      setError(error.message)
    );
  }

  function handleLogin(e) {
    e.preventDefault();
    setError(null);
    loginToAccount(auth, email, password).catch((error) =>
      setError(error.message)
    );
  }

  const fields = [
    {
      label: "Email",
      placeholder: "ex. example@email.com",
      fullWidth: true,
      value: email,
      onChange: handleEmailChange,
    },
    ,
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
                <Grid item sm={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleEmailPassword}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <CardActions>
                <Button variant="contained" type="submit">
                  Login
                </Button>
                <Button variant="contained" onClick={handleSignUp}>
                  Sign up
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
