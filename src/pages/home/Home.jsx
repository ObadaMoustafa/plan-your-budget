import { Navigate, useOutletContext } from "react-router-dom";
import ShowExpenses from "./components/show-expenses/ShowExpenses";
import AppContextProvider from "../../context/expensesContext";
import ShowIncomeSources from "./components/show-incom-sources/ShowIncomeSources";
import TotalAmounts from "./components/total-amounts/TotalAmounts";
import { Divider } from "@mui/material";

function Home() {
  //write code here
  const isUser = useOutletContext();
  return (
    <>
      {isUser ? (
        <AppContextProvider>
          <ShowIncomeSources />
          <Divider sx={{ borderColor: "#858383" }} />

          <ShowExpenses />
          <Divider sx={{ borderColor: "#858383" }} />

          <TotalAmounts />
        </AppContextProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Home;
