import { Box, Grid, Typography } from "@mui/material";

function IncomeCard({ title, value, id }) {
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
      <Grid container justifyContent="space-evenly">
        <Grid item xs={6} md={4}>
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h6" textAlign="center">
            €{value}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" textAlign="center">
            ♥♥♥
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default IncomeCard;
