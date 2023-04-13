import { useContext, useEffect } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";
import { getDataFormDb } from "../../../../utils/getData";
import { APP_ACTIONS } from "../../../../reducers/appReducer";
import SingleExpenseCard from "./SingleExpenseCard";

function ShowExpenses() {
  //write code here
  const { appState, dispatch } = useContext(AppExpensesContext);
  const { expenses } = appState;
  useEffect(() => {
    // get expenses
    (async () => {
      const expenses = await getDataFormDb("expenses");
      dispatch({ type: APP_ACTIONS.SET_EXPENSES, payload: expenses });
    })();
    // set it to app state
  }, []);

  return (
    <>
      {expenses ? (
        Object.entries(expenses).map(([key, expenseObject]) => {
          const { title, value, description } = expenseObject;
          return (
            <SingleExpenseCard
              key={key}
              title={title}
              value={value}
              desc={description}
            />
          );
        })
      ) : (
        <h1>You need to add some expenses</h1>
      )}
    </>
  );
}

export default ShowExpenses;
