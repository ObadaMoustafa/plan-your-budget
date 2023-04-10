import { Alert } from "@mui/material";

function ErrorMsg({ msg }) {
  //write code here

  return (
    <Alert color="error" variant="filled" severity="error">
      {msg}
    </Alert>
  );
}

export default ErrorMsg;
