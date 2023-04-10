import { Alert } from "@mui/material";

function Success({ msg }) {
  //write code here

  return (
    <Alert color="success" variant="filled" severity="success">
      {msg}
    </Alert>
  );
}

export default Success;
