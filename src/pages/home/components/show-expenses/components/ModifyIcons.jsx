import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Fab } from "@mui/material";
import BackdropForm from "../../../../../components/BackdropForm";
import EditExpenseForm from "./EditExpenseForm";
import { useState } from "react";
import DeleteExpenseConfirmation from "./DeleteExpenseConfirmation";

function ModifyIcons({ id }) {
  //write code here
  const [shouldEdit, setShouldEdit] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
  const openEditBackDrop = () => setShouldEdit(true);
  const openDeleteBackDrop = () => setShouldDelete(true);
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
      <Fab sx={{ mb: 2 }} size="small" onClick={openEditBackDrop}>
        <ModeEditIcon sx={iconStyle} />
      </Fab>
      <Fab size="small" onClick={openDeleteBackDrop}>
        <DeleteOutlineIcon sx={iconStyle} />
      </Fab>
      {shouldEdit && (
        <BackdropForm setOpen={setShouldEdit}>
          <EditExpenseForm id={id} />
        </BackdropForm>
      )}
      {shouldDelete && (
        <BackdropForm setOpen={setShouldDelete}>
          <DeleteExpenseConfirmation id={id} setOpen={setShouldDelete} />
        </BackdropForm>
      )}
    </Box>
  );
}

export default ModifyIcons;
