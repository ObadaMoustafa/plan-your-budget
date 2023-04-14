import { Backdrop, Box, Fab } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function BackdropForm({ setOpen, children }) {
  //write code here
  function closeIt() {
    setOpen(false);
  }

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Box sx={{ position: "absolute", top: 50 }}>
        <Fab onClick={closeIt}>
          <HighlightOffIcon />
        </Fab>
      </Box>
      {children}
    </Backdrop>
  );
}

export default BackdropForm;
