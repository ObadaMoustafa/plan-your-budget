import { useContext, useEffect } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";
import { getDataFormDb } from "../../../../utils/getData";
import { APP_ACTIONS } from "../../../../reducers/appReducer";
import SingleExpenseCard from "./components/SingleExpenseCard";
import { Box, Grid } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../../firebaseConfige";

function ShowExpenses() {
  //write code here
  const { dispatch, expenses } = useContext(AppExpensesContext);

  const expensesArr = Object.entries(expenses);
  useEffect(() => {
    // add proper listeners
    onValue(
      ref(getDatabase(), `users/${auth.currentUser.uid}/expenses`),
      (snapshot) => {
        dispatch({
          type: APP_ACTIONS.SET_EXPENSES,
          payload: snapshot.exportVal() || {},
        });
      }
    );
  }, []);

  return (
    <Box my={5}>
      {expensesArr.length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {expensesArr.map(([OBJ_ID, expenseObject]) => {
            const { title, value, description, category, IBAN, refMsg } =
              expenseObject;
            return (
              <Grid item key={OBJ_ID} xs={12} sm={6} md={4}>
                <SingleExpenseCard
                  id={OBJ_ID}
                  title={title}
                  value={value}
                  category={category}
                  description={description}
                  IBAN={IBAN}
                  refMsg={refMsg}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <h1>You need to add some expenses</h1>
      )}
    </Box>
  );
}

export default ShowExpenses;
