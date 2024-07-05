import { Typography, Container, Button, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebaseConfige";

function App() {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
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
    <Box bgcolor="#093966" minHeight="100vh">
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography
              variant="h3"
              component="h1"
              color="warning"
              m={3}
              ml={0}
            >
              plan your budget
            </Typography>
          </Grid>
          {isUser && (
            <Grid item>
              <Box>
                <Button variant="contained" onClick={handleSignOut}>
                  sign out
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
        <Outlet context={isUser} />
      </Container>
    </Box>
  );
}

export default App;
