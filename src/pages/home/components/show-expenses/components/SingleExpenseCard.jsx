import { Box, Typography } from "@mui/material";
import ModifyIcons from "./ModifyIcons";
function SingleExpenseCard({
  title,
  value,
  category,
  description,
  IBAN,
  refMsg,
  id,
}) {
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
      <Typography variant="h3" component="p" fontWeight={600}>
        {value}
      </Typography>
      <Typography variant="h4" component="p">
        {title}
      </Typography>
      <Typography variant="h5" component="p" fontWeight={600}>
        {category}
      </Typography>
      <Typography variant="h5" component="p">
        {description}
      </Typography>
      <Typography variant="h5" component="p">
        {IBAN}
      </Typography>
      <Typography variant="h5" component="p">
        {refMsg}
      </Typography>
    </Box>
  );
}

export default SingleExpenseCard;
