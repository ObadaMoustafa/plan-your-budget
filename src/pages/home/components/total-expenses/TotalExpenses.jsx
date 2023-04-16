import { Box, Button, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import { useContext } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";

function TotalExpenses() {
  const { totalExpenses } = useContext(AppExpensesContext);

  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<EuroIcon style={{ fontSize: "75px" }} />}
        color="warning"
        fullWidth
      >
        <Typography variant="h1" mr={3}>
          {totalExpenses}
        </Typography>
        <Typography variant="h4">Total expenses</Typography>
      </Button>
    </Box>
  );
}

export default TotalExpenses;
