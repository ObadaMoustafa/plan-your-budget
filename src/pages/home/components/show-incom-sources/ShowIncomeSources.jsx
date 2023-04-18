import { Box } from "@mui/material";
import IncomeCard from "./components/income-card/IncomeCard";
import AddIncome from "./components/add-income/AddIncome";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/expensesContext";
import { getDatabase, onValue, ref } from "firebase/database";
import { dbRef, auth } from "../../../../firebaseConfige";
import { APP_ACTIONS } from "../../../../reducers/appReducer";
import { editDataInDb } from "../../../../utils/setUpdateData";
import { sumValuesInObject } from "../../../../utils/helperFunctions";

function ShowIncomeSources() {
  //write code here
  const { dispatch, income } = useContext(AppContext);
  const incomeArr = Object.values(income);
  useEffect(() => {
    const { uid } = auth.currentUser;
    onValue(ref(getDatabase(), `users/${uid}/income`), async (snapshot) => {
      const incomeObj = snapshot.val() || {};
      // update income
      dispatch({
        type: APP_ACTIONS.GET_OR_SET_INCOME,
        payload: incomeObj,
      });

      // update total income
      const newTotalIncome = sumValuesInObject(incomeObj);
      await editDataInDb("totalIncome", newTotalIncome);
      dispatch({ type: APP_ACTIONS.SET_TOTAL_INCOME, payload: newTotalIncome });
    });
  }, []);

  return (
    <Box my={1}>
      <AddIncome />
      {incomeArr.length > 0 ? (
        Object.entries(income).map(([key, income]) => {
          return <IncomeCard key={key} {...income} id={key} />;
        })
      ) : (
        <h2>You need to add at least one income</h2>
      )}
    </Box>
  );
}

export default ShowIncomeSources;
