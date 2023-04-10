import { useState } from "react";
import AddButton from "./AddButton";
import BackdropForm from "./BackdropForm";
import AddExpensesForm from "./AddExpensesForm";

function AddExpenses() {
  //write code here
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AddButton onclick={setIsOpen} />
      {isOpen && (
        <BackdropForm setOpen={setIsOpen}>
          <AddExpensesForm />
        </BackdropForm>
      )}
    </>
  );
}

export default AddExpenses;
