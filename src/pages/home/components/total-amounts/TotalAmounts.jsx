import { Box } from "@mui/material";
import RestAmount from "./RestAmount";
import TotalExpenses from "./TotalExpenses";

function TotalAmounts() {
  //write code here

  return (
    <Box my={3}>
      <TotalExpenses />
      <RestAmount />
    </Box>
  );
}

export default TotalAmounts;
