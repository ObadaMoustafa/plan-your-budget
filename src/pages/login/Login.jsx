import {
  Button,
  Card,
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
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSignUp() {
    setError(null);
    createEmail(auth, email, password).catch((error) => {
      const errorMsg = error.message;
      if (errorMsg.includes("already-in-use"))
        setError("This email is already in use; you may want to Login");
      else if (errorMsg.includes("weak-password"))
        setError("Weak password: It should be at least 6 characters");
      else if (errorMsg.includes("invalid-email"))
        setError("Invalid email: use a correct valid form. ex, name@email.com");
      else setError(errorMsg);
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    setError(null);
    loginToAccount(auth, email, password).catch((error) => {
      const errorMsg = error.message;
      if (errorMsg.includes("user-not-found"))
        setError(
          "This email is not in use. If this is your first time, please click sign up"
        );
      else if (errorMsg.includes("wrong-password")) setError("Wrong password");
      else if (errorMsg.includes("invalid-email"))
        setError("Invalid email: use a correct valid form. ex, name@email.com");
      else setError(errorMsg);
    });
  }

  const emailFieldProps = {
    label: "Email",
    placeholder: "ex. example@email.com",
    fullWidth: true,
    value: email,
    onChange: handleEmailChange,
  };

  return (
    <>
      {isUser ? (
        <Navigate to="/" />
      ) : (
        <>
          <Card sx={{ mx: "auto", p: 3 }}>
            <CardHeader title="login Form" color="primary" />
            <form onSubmit={handleLogin}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField {...emailFieldProps} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      onChange={handlePasswordChange}
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
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{ m: 2 }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={handleSignUp}
                sx={{ m: 2 }}
              >
                Sign up
              </Button>
            </form>
          </Card>
          {error && <ErrorMsg msg={error} />}
        </>
      )}
    </>
  );
}

export default Login;
