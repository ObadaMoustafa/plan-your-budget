import { useContext } from "react";
import { AppContext } from "../../../../context/expensesContext";
import ShowAmount from "../../../../components/ShowAmount";

function RestAmount() {
  const { restMoney } = useContext(AppContext);

  return <ShowAmount amount={restMoney} text="remains" />;
}

export default RestAmount;
