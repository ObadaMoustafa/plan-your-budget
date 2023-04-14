import { Button, FormControl, TextField } from "@mui/material";
import { useImmerReducer } from "use-immer";
import {
  ADD_EXPENSES_ACTIONS,
  addExpensesInitial,
  addExpensesReducer,
} from "../../../../reducers/addExpensesReducer";
import { APP_ACTIONS } from "../../../../reducers/appReducer";
import { useContext, useEffect } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";
import { updateDbDate } from "../../../../utils/setUpdateData";

function AddExpensesForm() {
  //write code here
  const [singleExpenseState, dispatchSubmit] = useImmerReducer(
    addExpensesReducer,
    addExpensesInitial
  );
  const { appState, dispatch } = useContext(AppExpensesContext);

  function handleChangeField(e) {
    const key = e.target.name;
    const payload = e.target.value;
    dispatchSubmit({ type: ADD_EXPENSES_ACTIONS.CHANGE_FIELD, key, payload });
  }

  async function handleSubmitExpenses(e) {
    e.preventDefault();
    // update db
    // add the reference to the object
    // update the app state
    // update the ex state
    const elementRef = await updateDbDate("expenses", singleExpenseState);
    // save the single expenses object
    const copyOfSingleExpenseState = singleExpenseState;
    dispatch({
      type: APP_ACTIONS.PUSH_AN_EXPENSE,
      key: elementRef,
      payload: copyOfSingleExpenseState,
    });
    dispatchSubmit({ type: ADD_EXPENSES_ACTIONS.RESET });
  }

  return (
    <form style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <FormControl
        sx={{
          border: "1px solid black",
          width: "90%",
          bgcolor: "white",
          borderRadius: 5,
        }}
      >
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="Expense name"
          name="title"
          value={singleExpenseState.title}
          onChange={handleChangeField}
          required
        />
        <TextField
          type="number"
          variant="filled"
          color="warning"
          label="value 💰"
          name="value"
          value={singleExpenseState.value}
          onChange={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="Category"
          name="category"
          value={singleExpenseState.category}
          onChange={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="description"
          name="description"
          value={singleExpenseState.description}
          onChange={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="IBAN"
          name="IBAN"
          value={singleExpenseState.IBAN}
          onChange={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="Transfer msg"
          name="ref"
          value={singleExpenseState.ref}
          onChange={handleChangeField}
        />

        <Button onClick={handleSubmitExpenses} type="submit">
          Add expense
        </Button>
      </FormControl>
    </form>
  );
}

export default AddExpensesForm;
