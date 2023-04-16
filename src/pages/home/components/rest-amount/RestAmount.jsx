import { Box, Button, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import { useContext } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";

function RestAmount() {
  const { restMoney } = useContext(AppExpensesContext);

  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<EuroIcon style={{ fontSize: "75px" }} />}
        fullWidth
      >
        <Typography variant="h1" mr={3}>
          {restMoney}
        </Typography>
        <Typography variant="h4">is left</Typography>
      </Button>
    </Box>
  );
}

export default RestAmount;
