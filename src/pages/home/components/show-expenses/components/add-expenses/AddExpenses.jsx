import { useState } from "react";
import AddButton from "./AddButton";
import AddExpensesForm from "./AddExpensesForm";
import { Box } from "@mui/material";
import BackdropForm from "../../../../../../components/BackdropForm";
import AddCardIcon from "@mui/icons-material/AddCard";

function AddExpenses() {
  //write code here
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const closeBackDrop = () => setOpenBackDrop(false);

  return (
    <Box my={4}>
      <AddButton
        onclick={setOpenBackDrop}
        color="error"
        btnIcon={<AddCardIcon />}
      >
        add expenses
      </AddButton>
      {openBackDrop && (
        <BackdropForm setOpen={setOpenBackDrop}>
          <AddExpensesForm close={closeBackDrop} />
        </BackdropForm>
      )}
    </Box>
  );
}

export default AddExpenses;
