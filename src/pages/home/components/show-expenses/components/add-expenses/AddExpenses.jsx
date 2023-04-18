import { useState } from "react";
import AddButton from "./AddButton";
import AddExpensesForm from "./AddExpensesForm";
import { Box } from "@mui/material";
import BackdropForm from "../../../../../../components/BackdropForm";

function AddExpenses() {
  //write code here
  const [isOpen, setIsOpen] = useState(false);
  const closeBackDrop = () => setIsOpen(false);

  return (
    <Box my={2}>
      <AddButton onclick={setIsOpen} />
      {isOpen && (
        <BackdropForm setOpen={setIsOpen}>
          <AddExpensesForm close={closeBackDrop} />
        </BackdropForm>
      )}
    </Box>
  );
}

export default AddExpenses;
