import { Button, FormControl, TextField } from "@mui/material";
import { useImmerReducer } from "use-immer";
import {
  ADD_EXPENSES_ACTIONS,
  addExpensesInitial,
  addExpensesReducer,
} from "../../../../reducers/addExpensesReducer";

function AddExpensesForm() {
  //write code here
  const [state, dispatch] = useImmerReducer(
    addExpensesReducer,
    addExpensesInitial
  );

  function handleChangeField(e) {
    const key = e.target.name;
    const payload = e.target.value;
    dispatch({ type: ADD_EXPENSES_ACTIONS.CHANGE_FIELD, key, payload });
  }

  function handleSubmitExpenses() {
    console.log("submitted", state);
  }
  return (
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
        value={state.title}
        onChange={handleChangeField}
        required
      />
      <TextField
        type="text"
        variant="filled"
        color="warning"
        label="value 💰"
        name="value"
        value={state.value}
        onChange={handleChangeField}
      />
      <TextField
        type="text"
        variant="filled"
        color="warning"
        label="Category"
        name="category"
        value={state.category}
        onChange={handleChangeField}
      />
      <TextField
        type="text"
        variant="filled"
        color="warning"
        label="description"
        name="description"
        value={state.description}
        onChange={handleChangeField}
      />
      <TextField
        type="text"
        variant="filled"
        color="warning"
        label="IBAN"
        name="IBAN"
        value={state.IBAN}
        onChange={handleChangeField}
      />
      <TextField
        type="text"
        variant="filled"
        color="warning"
        label="Transfer msg"
        name="ref"
        value={state.ref}
        onChange={handleChangeField}
      />

      <Button onClick={handleSubmitExpenses} type="submit">
        Add expense
      </Button>
    </FormControl>
  );
}

export default AddExpensesForm;
