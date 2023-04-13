import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Fab } from "@mui/material";

function ModifyIcons({ id }) {
  //write code here
  const iconStyle = {
    cursor: "pointer",
    ":hover": {
      color: "red",
    },
    ":active": {
      color: "gray",
    },
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Fab sx={{ mb: 2 }} size="small">
        <ModeEditIcon sx={iconStyle} />
      </Fab>
      <Fab size="small">
        <DeleteOutlineIcon sx={iconStyle} />
      </Fab>
    </Box>
  );
}

export default ModifyIcons;
