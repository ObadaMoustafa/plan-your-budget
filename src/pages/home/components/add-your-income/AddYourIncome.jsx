import { useContext, useEffect, useRef, useState } from "react";
import { Box, Fab, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { editDataInDb, getDataFormDb } from "../../../../utils/getData";
import { APP_ACTIONS } from "../../../../reducers/appReducer";
import { AppExpensesContext } from "../../../../context/expensesContext";

function AddYourIncome() {
  //write code here
  const incomeEl = useRef();
  const { dispatch, income } = useContext(AppExpensesContext);
  const [shouldModify, setShouldModify] = useState(false);

  async function editIncome() {
    if (shouldModify) {
      const value = Number(incomeEl.current.value);
      try {
        await editDataInDb("income", value);
        dispatch({ type: APP_ACTIONS.GET_OR_SET_INCOME, payload: value });
        setShouldModify(false);
      } catch (err) {
        console.log("can't modify", err.message);
      }
    } else {
      setShouldModify(true);
    }
  }

  useEffect(() => {
    (async function () {
      try {
        const income = await getDataFormDb("income");
        dispatch({ type: APP_ACTIONS.GET_OR_SET_INCOME, payload: income });
      } catch (err) {
        console.log("can't get the initial income", err.message);
      }
    })();
  }, []);

  return (
    <Box>
      <Typography variant="h3">{income} €/month</Typography>
      <Fab onClick={editIncome}>
        <EditIcon />
      </Fab>
      {shouldModify && (
        <TextField
          type="number"
          label="New income"
          placeholder="ex. 5000"
          inputRef={incomeEl}
        />
      )}
    </Box>
  );
}

export default AddYourIncome;
