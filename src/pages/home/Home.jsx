import { Navigate, useOutletContext } from "react-router-dom";
import AddExpenses from "./components/add-expenses/AddExpenses";
import AddYourIncome from "./components/add-your-income/AddYourIncome";
import RestAmount from "./components/rest-amount/RestAmount";
import ShowExpenses from "./components/show-expenses/ShowExpenses";
import AppExpensesContextProvider from "../../context/expensesContext";
import TotalExpenses from "./components/total-expenses/TotalExpenses";

function Home() {
  //write code here
  const isUser = useOutletContext();
  return (
    <>
      {isUser ? (
        <AppExpensesContextProvider>
          <AddYourIncome />
          <AddExpenses />
          <ShowExpenses />
          <TotalExpenses />
          <RestAmount />
        </AppExpensesContextProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Home;
