import { Box, Button } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import { useContext } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";

function RestAmount() {
  const { restMoney } = useContext(AppExpensesContext);

  return (
    <Box>
      <Button variant="contained" startIcon={<EuroIcon />}>
        {restMoney}
      </Button>
    </Box>
  );
}

export default RestAmount;
