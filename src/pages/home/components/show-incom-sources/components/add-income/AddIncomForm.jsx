import { useImmerReducer } from "use-immer";
import {
  ADD_INCOME_ACTIONS,
  addIncomeInit,
  addIncomeReducer,
} from "../../../../../../reducers/addIncomeReducer";
import { Button, FormControl, TextField } from "@mui/material";
import { useEffect } from "react";
import { pushDataToDb } from "../../../../../../utils/setUpdateData";
import { ADD_EXPENSES_ACTIONS } from "../../../../../../reducers/addExpensesReducer";

function AddIncomeForm() {
  //write code here
  const [incomeState, dispatchIncomeState] = useImmerReducer(
    addIncomeReducer,
    addIncomeInit
  );

  function handleChangeField(e) {
    const key = e.target.name;
    const value = e.target.value;
    console.table({ key, value });
    dispatchIncomeState({
      type: ADD_INCOME_ACTIONS.CHANGE_FIELD,
      key,
      payload: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // push to db
      await pushDataToDb("income", incomeState);
      dispatchIncomeState({ type: ADD_EXPENSES_ACTIONS.RESET });
    } catch (error) {
      console.error("couldn't push to income", error.message);
    }
  }

  useEffect(() => {
    console.log(incomeState);
  }, [incomeState]);
  return (
    <form
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      onSubmit={handleSubmit}
    >
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
          value={incomeState.title}
          onInput={handleChangeField}
          required
        />
        <TextField
          type="number"
          variant="filled"
          color="warning"
          label="value 💰"
          name="value"
          value={incomeState.value}
          onInput={handleChangeField}
          required
        />
        <Button type="submit">submit income</Button>
      </FormControl>
    </form>
  );
}

export default AddIncomeForm;
