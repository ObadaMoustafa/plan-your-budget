import { useImmerReducer } from "use-immer";
import {
  APP_ACTIONS,
  APP_INITIAL_STATE,
  appReducer,
} from "../reducers/appReducer";
import { createContext, useEffect } from "react";
import { editDataInDb } from "../utils/setUpdateData";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [appState, dispatch] = useImmerReducer(appReducer, APP_INITIAL_STATE);
  const { income, expenses, totalIncome, restMoney, totalExpenses } = appState;

  useEffect(() => {
    (async function () {
      const newRestMoney = totalIncome - totalExpenses;
      await editDataInDb("restMoney", newRestMoney);
      dispatch({ type: APP_ACTIONS.SET_REST_MONEY, payload: newRestMoney });
    })();
  }, [totalIncome, totalExpenses]);

  const sharedValues = {
    dispatch,
    income,
    expenses,
    totalIncome,
    restMoney,
    totalExpenses,
  };
  return (
    <AppContext.Provider value={sharedValues}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
