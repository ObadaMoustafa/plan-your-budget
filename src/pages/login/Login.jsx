import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";

function Login() {
  //write code here
  const fields = [
    {
      label: "Email",
      placeholder: "ex. example@email.com",
      fullWidth: true,
    },
    {
      label: "password",
      placeholder: "enter your password",
      type: "password",
      fullWidth: true,
    },
  ];
  return (
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
        <Button variant="contained">Login</Button>
        <Button variant="outlined">Sign up</Button>
      </CardActions>
    </Card>
  );
}

export default Login;
