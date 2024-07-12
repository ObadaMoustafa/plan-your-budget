import { Navigate, useOutletContext } from "react-router-dom";
import ShowExpenses from "./components/show-expenses/ShowExpenses";
import AppContextProvider from "../../context/expensesContext";
import ShowIncomeSources from "./components/show-incom-sources/ShowIncomeSources";
import TotalAmounts from "./components/total-amounts/TotalAmounts";
import { Box, Divider, Link } from "@mui/material";

function Home() {
  //write code here
  const isUser = useOutletContext();
  return (
    <>
      {isUser ? (
        <AppContextProvider>
          <Divider sx={{ borderColor: "#858383" }} />
          <ShowIncomeSources />

          <ShowExpenses />
          <Divider sx={{ borderColor: "#858383" }} />

          <TotalAmounts />
          <Divider sx={{ borderColor: "#858383" }} />
          <Box p={3} pl={0}>
            <Link
              href="mailto:obadamoustafa@gmail.com"
              underline="hover"
              color="orange"
              fontSize={30}
            >
              Have any difficulties or comments? contact me
            </Link>
          </Box>
        </AppContextProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Home;
