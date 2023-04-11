import { useState } from "react";
import AddButton from "./AddButton";
import BackdropForm from "./BackdropForm";
import AddExpensesForm from "./AddExpensesForm";
import { Box } from "@mui/material";

function AddExpenses() {
  //write code here
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box my={2}>
      <AddButton onclick={setIsOpen} />
      {isOpen && (
        <BackdropForm setOpen={setIsOpen}>
          <AddExpensesForm />
        </BackdropForm>
      )}
    </Box>
  );
}

export default AddExpenses;
