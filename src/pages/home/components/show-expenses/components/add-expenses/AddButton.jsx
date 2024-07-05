import { Button, Tooltip } from "@mui/material";
function AddButton({ onclick, color, children, btnIcon }) {
  //write code here
  function toggleIsOpen() {
    onclick((prev) => !prev);
  }
  return (
    <>
      <Tooltip title="Add expenses" placement="top">
        <Button
          variant="contained"
          size="large"
          color={color}
          sx={{ width: 200 }}
          onClick={toggleIsOpen}
          startIcon={btnIcon}
        >
          {children}
        </Button>
      </Tooltip>
    </>
  );
}

export default AddButton;
