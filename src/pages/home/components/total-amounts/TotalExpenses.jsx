import { useContext } from "react";
import { AppContext } from "../../../../context/expensesContext";
import ShowAmount from "../../../../components/ShowAmount";

function TotalExpenses() {
  const { totalExpenses } = useContext(AppContext);

  return <ShowAmount amount={totalExpenses} text="Expenses" color="warning" />;
}

export default TotalExpenses;
