import { Typography, Container, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfige";

function App() {
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
        <Box>
          <Button variant="contained" onClick={handleSignOut}>
            sign out
          </Button>
        </Box>
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
