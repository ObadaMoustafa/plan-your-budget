import { Box, Typography } from "@mui/material";
import ModifyIcons from "./ModifyIcons";
function SingleExpenseCard({ title, value, desc, id }) {
  //write code here

  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: 5,
        p: 2,
        position: "relative",
      }}
      boxShadow={2}
    >
      <ModifyIcons id={id} />
      <Typography variant="h3" component="p">
        {value}
      </Typography>
      <Typography variant="h4" component="p">
        {title}
      </Typography>
      <Typography variant="h5" component="p">
        {desc}
      </Typography>
    </Box>
  );
}

export default SingleExpenseCard;
