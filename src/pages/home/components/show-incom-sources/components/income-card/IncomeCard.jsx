import { Box, Grid, Typography } from "@mui/material";
import ActionButtons from "./ActionButtons";

function IncomeCard({ title, value, incomeKey }) {
  return (
    <Box
      sx={{
        boxShadow: 3,
        p: 3,
        borderRadius: 3,
        bgcolor: "success.main",
        color: "white",
        my: 1,
      }}
    >
      <Grid container justifyContent="center" columns={20}>
        <Grid item xs={15}>
          <Typography variant="h6" textAlign="left">
            {title}
          </Typography>
          <Typography variant="h6" textAlign="left">
            €{value}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <ActionButtons incomeKey={incomeKey} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default IncomeCard;
