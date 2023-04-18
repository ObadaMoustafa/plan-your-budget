import { Button, Tooltip } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
function AddButton({ onclick }) {
  //write code here
  function toggleIsOpen() {
    onclick((prev) => !prev);
  }
  return (
    <>
      <Tooltip title="Add expenses" placement="top">
        <Button
          variant="contained"
          sx={{ width: 200 }}
          onClick={toggleIsOpen}
          startIcon={<AddCardIcon />}
        >
          add expense
        </Button>
      </Tooltip>
    </>
  );
}

export default AddButton;
