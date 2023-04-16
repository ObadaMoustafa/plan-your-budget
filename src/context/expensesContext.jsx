import { useImmerReducer } from "use-immer";
import {
  APP_ACTIONS,
  APP_INITIAL_STATE,
  appReducer,
} from "../reducers/appReducer";
import { createContext, useEffect } from "react";
import { editDataInDb } from "../utils/setUpdateData";

export const AppExpensesContext = createContext();
const AppExpensesContextProvider = ({ children }) => {
  const [appState, dispatch] = useImmerReducer(appReducer, APP_INITIAL_STATE);
  const { income, expenses, restMoney, totalExpenses } = appState;

  useEffect(() => {
    (async function () {
      const expensesArr = Object.values(expenses);
      const isExpenses = expensesArr.length > 0;
      let totalExpenses = 0,
        restMoney = 0;
      if (isExpenses) {
        totalExpenses = expensesArr
          .map((obj) => obj.value)
          .reduce((a, b) => a + b, 0);
        restMoney = income - totalExpenses;
      }

      try {
        // update db
        await editDataInDb("totalExpenses", totalExpenses);
        await editDataInDb("restMoney", restMoney);
        // update UI
        dispatch({
          type: APP_ACTIONS.SET_REST_MONEY,
          payload: restMoney,
        });

        dispatch({
          type: APP_ACTIONS.SET_TOTAL_EXPENSES,
          payload: totalExpenses,
        });
      } catch (error) {
        console.error("couldn't update db", error.message);
      }
    })();

    // the rest money
  }, [income, expenses]);

  const sharedValues = { dispatch, income, expenses, restMoney, totalExpenses };
  return (
    <AppExpensesContext.Provider value={sharedValues}>
      {children}
    </AppExpensesContext.Provider>
  );
};

export default AppExpensesContextProvider;
