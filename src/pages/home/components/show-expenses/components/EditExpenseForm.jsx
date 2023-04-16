import { useImmerReducer } from "use-immer";
import {
  ADD_EXPENSES_ACTIONS,
  addExpensesInitial,
  addExpensesReducer,
} from "../../../../../reducers/addExpensesReducer";
import { useEffect } from "react";
import { updateSingleExpenseInDb } from "../../../../../utils/setUpdateData";
import { Button, FormControl, TextField } from "@mui/material";
import { getDataFormDb } from "../../../../../utils/getData";

function EditExpenseForm({ id }) {
  const [singleExpenseState, dispatchSubmit] = useImmerReducer(
    addExpensesReducer,
    addExpensesInitial
  );

  // get the expense objects value on render
  useEffect(() => {
    (async function () {
      try {
        const expenseObj = await getDataFormDb(`expenses/${id}`);

        dispatchSubmit({
          type: ADD_EXPENSES_ACTIONS.SET_FIELDS,
          payload: expenseObj,
        });
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  function handleChangeField(e) {
    const key = e.target.name;
    const payload = e.target.value;
    dispatchSubmit({ type: ADD_EXPENSES_ACTIONS.CHANGE_FIELD, key, payload });
  }

  async function handleSubmitExpenses(e) {
    e.preventDefault();
    try {
      // update db
      await updateSingleExpenseInDb(id, singleExpenseState);

      // CLEAR FIELDS
      dispatchSubmit({ type: ADD_EXPENSES_ACTIONS.RESET });
    } catch (error) {
      console.error("can't update", error.message);
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
          Save
        </Button>
      </FormControl>
    </form>
  );
}

export default EditExpenseForm;
