import { useImmerReducer } from "use-immer";
import {
  APP_ACTIONS,
  APP_INITIAL_STATE,
  appReducer,
} from "../reducers/appReducer";
import { createContext, useEffect } from "react";

export const AppExpensesContext = createContext();
const AppExpensesContextProvider = ({ children }) => {
  const [appState, dispatch] = useImmerReducer(appReducer, APP_INITIAL_STATE);
  const { income, expenses } = appState;
  useEffect(() => {
    // totalExpenses
    const expensesArr = Object.values(expenses);
    if (expensesArr.length) {
      const restMoney =
        income - expensesArr.map((obj) => obj.value).reduce((a, b) => a + b, 0);

      dispatch({
        type: APP_ACTIONS.SET_REST_MONEY,
        payload: restMoney,
      });
    }
    // the rest money
  }, [income, expenses]);

  const sharedValues = { appState, dispatch };
  return (
    <AppExpensesContext.Provider value={sharedValues}>
      {children}
    </AppExpensesContext.Provider>
  );
};

export default AppExpensesContextProvider;
