import { Backdrop, Box, Fab } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect } from "react";

function BackdropForm({ setOpen, children }) {
  //write code here
  function closeIt(e) {
    if (e.which === 27 || e.type === "click") setOpen(false);
  }

  useEffect(() => {
    window.addEventListener("keydown", closeIt);
    return () => removeEventListener("keydown", closeIt);
  }, []);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onKeyDown={closeIt}
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
