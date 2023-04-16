import { Box, Button, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import { useContext } from "react";
import { AppExpensesContext } from "../../../../context/expensesContext";

function RestAmount() {
  const { restMoney } = useContext(AppExpensesContext);

  return (
    <Box my={1}>
      <Button
        variant="contained"
        startIcon={<EuroIcon style={{ fontSize: "3rem" }} />}
        fullWidth
      >
        <Typography variant="h1" mr={3} fontSize={{ xs: "50px", md: "100px" }}>
          {restMoney}
        </Typography>
        <Typography variant="h4" fontSize={{ xs: "16px", md: "50px" }}>
          is left
        </Typography>
      </Button>
    </Box>
  );
}

export default RestAmount;
