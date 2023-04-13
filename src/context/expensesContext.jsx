import { useImmerReducer } from "use-immer";
import { APP_INITIAL_STATE, appReducer } from "../reducers/appReducer";
import { createContext, useEffect } from "react";

export const AppExpensesContext = createContext();
const AppExpensesContextProvider = ({ children }) => {
  const [appState, dispatch] = useImmerReducer(appReducer, APP_INITIAL_STATE);

  // useEffect(() => {
  //   console.log("🚀 => appState:", appState);
  // }, [appState]);

  const sharedValues = { appState, dispatch };
  return (
    <AppExpensesContext.Provider value={sharedValues}>
      {children}
    </AppExpensesContext.Provider>
  );
};

export default AppExpensesContextProvider;
