import { useImmerReducer } from "use-immer";
import { useEffect } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import {
  ADD_INCOME_ACTIONS,
  addIncomeInit,
  addIncomeReducer,
} from "../../../../../../reducers/addIncomeReducer";
import { getDataFormDb } from "../../../../../../utils/getData";
import { updateSingleIncomeInDb } from "../../../../../../utils/setUpdateData";

function EditIncomeForm({ id, close }) {
  const [incomeState, dispatchIncomeState] = useImmerReducer(
    addIncomeReducer,
    addIncomeInit
  );

  function handleChangeField(e) {
    const key = e.target.name;
    const value = e.target.value;
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
      await updateSingleIncomeInDb(id, incomeState);
      dispatchIncomeState({ type: ADD_INCOME_ACTIONS.RESET });
      close();
    } catch (error) {
      console.error("couldn't edit the income", error.message);
    }
  }

  // get the expense objects value on render
  useEffect(() => {
    (async function () {
      try {
        const incomeObj = await getDataFormDb(`income/${id}`);

        dispatchIncomeState({
          type: ADD_INCOME_ACTIONS.SET_FIELDS,
          payload: incomeObj,
        });
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

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

export default EditIncomeForm;
