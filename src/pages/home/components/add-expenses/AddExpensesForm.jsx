import { Button, FormControl, TextField } from "@mui/material";
import { useImmerReducer } from "use-immer";
import {
  ADD_EXPENSES_ACTIONS,
  addExpensesInitial,
  addExpensesReducer,
} from "../../../../reducers/addExpensesReducer";
import { pushDataToDb } from "../../../../utils/setUpdateData";

function AddExpensesForm() {
  //write code here
  const [singleExpenseState, dispatchSubmit] = useImmerReducer(
    addExpensesReducer,
    addExpensesInitial
  );

  function handleChangeField(e) {
    const key = e.target.name;
    const payload = e.target.value;
    dispatchSubmit({ type: ADD_EXPENSES_ACTIONS.CHANGE_FIELD, key, payload });
  }

  async function handleSubmitExpenses(e) {
    e.preventDefault();
    try {
      // update db
      await pushDataToDb("expenses", singleExpenseState);

      // CLEAR FIELDS
      dispatchSubmit({ type: ADD_EXPENSES_ACTIONS.RESET });
    } catch (error) {
      console.error("can't push single expense", error.message);
    }
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
          onInput={handleChangeField}
          required
        />
        <TextField
          type="number"
          variant="filled"
          color="warning"
          label="value 💰"
          name="value"
          value={singleExpenseState.value}
          onInput={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="Category"
          name="category"
          value={singleExpenseState.category}
          onInput={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="description"
          name="description"
          value={singleExpenseState.description}
          onInput={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="IBAN"
          name="IBAN"
          value={singleExpenseState.IBAN}
          onInput={handleChangeField}
        />
        <TextField
          type="text"
          variant="filled"
          color="warning"
          label="Transfer msg"
          name="refMsg"
          value={singleExpenseState.refMsg}
          onInput={handleChangeField}
        />

        <Button onClick={handleSubmitExpenses} type="submit">
          Add expense
        </Button>
      </FormControl>
    </form>
  );
}

export default AddExpensesForm;
