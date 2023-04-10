import { Typography, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <Container>
      <Link to="/">
        <Typography variant="h3" component="h1">
          plan your budget
        </Typography>
      </Link>
      <Link to="/login">
        <Typography variant="h3" component="h1">
          Login
        </Typography>
      </Link>
      <Outlet />
    </Container>
  );
}

export default App;
