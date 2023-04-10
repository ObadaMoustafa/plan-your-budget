import { Button, Tooltip, Typography } from "@mui/material";
function AddButton({ onclick }) {
  //write code here
  function toggleIsOpen() {
    onclick((prev) => !prev);
  }
  return (
    <>
      <Tooltip title="Add expenses" placement="top">
        <Button variant="contained" sx={{ width: 200 }} onClick={toggleIsOpen}>
          <Typography variant="h1">+</Typography>
        </Button>
      </Tooltip>
    </>
  );
}

export default AddButton;
