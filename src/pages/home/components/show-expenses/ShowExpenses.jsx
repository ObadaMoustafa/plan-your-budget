import { useContext, useEffect } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";
import { getDataFormDb } from "../../../../utils/getData";
import { APP_ACTIONS } from "../../../../reducers/appReducer";
import SingleExpenseCard from "./SingleExpenseCard";
import { Grid } from "@mui/material";
import { getDatabase, onValue, ref } from "firebase/database";
import { auth } from "../../../../firebaseConfige";

function ShowExpenses() {
  //write code here
  const { appState, dispatch } = useContext(AppExpensesContext);
  const { expenses } = appState;
  useEffect(() => {
    // get expenses
    (async () => {
      const expenses = await getDataFormDb("expenses");
      dispatch({ type: APP_ACTIONS.SET_EXPENSES, payload: expenses || {} });
    })();

    // add proper listeners

    onValue(
      ref(getDatabase(), `users/${auth.currentUser.uid}/expenses`),
      (snapshot) => {
        console.log("🚀  snapshot:", snapshot.exportVal());
        dispatch({
          type: APP_ACTIONS.SET_EXPENSES,
          payload: snapshot.exportVal() || {},
        });
      }
    );
  }, []);

  return (
    <>
      {Object.values(expenses).length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {Object.entries(expenses).map(([key, expenseObject]) => {
            const { title, value, description } = expenseObject;
            return (
              <Grid item key={key}>
                <SingleExpenseCard
                  id={key}
                  title={title}
                  value={value}
                  desc={description}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <h1>You need to add some expenses</h1>
      )}
    </>
  );
}

export default ShowExpenses;
