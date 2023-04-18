import { Box, Button, Typography } from "@mui/material";
import { auth } from "../firebaseConfige";
import { getDatabase, ref, remove } from "firebase/database";

function DeleteConfirmation({ id, setOpen, text, shouldDelete }) {
  function closeBackDrop() {
    setOpen(false);
  }

  async function deleteExpense() {
    const { uid } = auth.currentUser;
    await remove(ref(getDatabase(), `users/${uid}/${shouldDelete}/${id}`));
  }

  return (
    <Box>
      <Box
        component="div"
        width="95%"
        border="1px solid black"
        borderRadius={5}
        bgcolor="white"
        p={2}
      >
        <Typography variant="h5" color="black">
          {text}
        </Typography>
        <Box margin="5px auto" width="fit-content">
          <Button variant="outlined" onClick={deleteExpense} sx={{ mr: 2 }}>
            confirm
          </Button>
          <Button variant="contained" onClick={closeBackDrop}>
            cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default DeleteConfirmation;
