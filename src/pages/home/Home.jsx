import { Navigate, useOutletContext } from "react-router-dom";
import AddExpenses from "./components/add-expenses/AddExpenses";
import RestAmount from "./components/rest-amount/RestAmount";
import ShowExpenses from "./components/show-expenses/ShowExpenses";
import AppContextProvider from "../../context/expensesContext";
import TotalExpenses from "./components/total-expenses/TotalExpenses";
import ShowIncomeSources from "./components/show-incom-sources/ShowIncomeSources";

function Home() {
  //write code here
  const isUser = useOutletContext();
  return (
    <>
      {isUser ? (
        <AppContextProvider>
          <ShowIncomeSources />
          <AddExpenses />
          <ShowExpenses />
          <TotalExpenses />
          <RestAmount />
        </AppContextProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Home;
