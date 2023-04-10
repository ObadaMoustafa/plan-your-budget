import { Navigate, useOutletContext } from "react-router-dom";
import AddExpenses from "./components/add-expenses/AddExpenses";
import AddYourIncome from "./components/add-your-income/AddYourIncome";

function Home() {
  //write code here
  const isUser = useOutletContext();
  return (
    <>
      {isUser ? (
        <>
          <AddExpenses />
          <AddYourIncome />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Home;
