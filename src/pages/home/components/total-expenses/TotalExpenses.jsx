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
        sx={{ fontSize: "100px" }}
        startIcon={<EuroIcon style={{ fontSize: "3rem" }} />}
        color="warning"
        fullWidth
      >
        <Typography variant="h1" mr={3} fontSize={{ xs: "50px", md: "100px" }}>
          {totalExpenses}
        </Typography>
        <Typography variant="h4" fontSize={{ xs: "16px", md: "50px" }}>
          Total expenses
        </Typography>
      </Button>
    </Box>
  );
}

export default TotalExpenses;
