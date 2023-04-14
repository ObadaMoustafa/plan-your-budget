import { getDatabase, ref, remove } from "firebase/database";
import { auth } from "../../../../firebaseConfige";
import { Box, Button, Typography } from "@mui/material";

function DeleteExpenseConfirmation({ id, setOpen }) {
  function closeBackDrop() {
    setOpen(false);
  }

  async function deleteExpense() {
    const { uid } = auth.currentUser;
    await remove(ref(getDatabase(), `users/${uid}/expenses/${id}`));
    console.log(`${id} deleted`);
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
          Are you sure you want to delete this item ?
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

export default DeleteExpenseConfirmation;
