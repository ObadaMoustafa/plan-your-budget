import { Box, Button } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

function RestAmount() {
  //write code here

  return (
    <Box>
      <Button variant="contained" startIcon={<EuroIcon />}>
        the rest amount
      </Button>
    </Box>
  );
}

export default RestAmount;
