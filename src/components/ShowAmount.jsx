import { Box, Button, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";

function ShowAmount({ amount, text, color = "primary" }) {
  //write code here

  return (
    <Box my={1}>
      <Button
        variant="contained"
        startIcon={<EuroIcon style={{ fontSize: "3rem" }} />}
        color={color}
        fullWidth
      >
        <Typography variant="h1" mr={3} fontSize={{ xs: "50px", md: "100px" }}>
          {amount}
        </Typography>
        <Typography variant="h4" fontSize={{ xs: "16px", md: "50px" }}>
          {text}
        </Typography>
      </Button>
    </Box>
  );
}

export default ShowAmount;
