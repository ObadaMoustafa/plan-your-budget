import { Navigate, useOutletContext } from "react-router-dom";
import ShowExpenses from "./components/show-expenses/ShowExpenses";
import AppContextProvider from "../../context/expensesContext";
import ShowIncomeSources from "./components/show-incom-sources/ShowIncomeSources";
import TotalAmounts from "./components/total-amounts/TotalAmounts";

function Home() {
  //write code here
  const isUser = useOutletContext();
  return (
    <>
      {isUser ? (
        <AppContextProvider>
          <ShowIncomeSources />
          <ShowExpenses />
          <TotalAmounts />
        </AppContextProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Home;
