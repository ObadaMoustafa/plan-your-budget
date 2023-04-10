import { Typography, Container, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  isSignInWithEmailLink,
  onAuthStateChanged,
  signInWithEmailLink,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfige";

function App() {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid from app", uid);
        setIsUser(true);
      } else {
        console.log("user signed out from app", user);
        setIsUser(false);
      }
    });
  }, []);

  function handleSignOut() {
    signOut(auth).catch((error) => {
      console.error("error while signing out", error.message);
    });
  }
  return (
    <Container>
      <Link to="/">
        <Typography variant="h3" component="h1">
          plan your budget
        </Typography>
      </Link>
      {isUser ? (
        <Button variant="contained" onClick={handleSignOut}>
          sign out
        </Button>
      ) : (
        <Link to="/login">
          <Typography variant="h3" component="h1">
            Login
          </Typography>
        </Link>
      )}
      <Outlet context={isUser} />
    </Container>
  );
}

export default App;
