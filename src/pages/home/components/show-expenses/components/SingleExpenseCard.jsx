import { Box, Typography, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModifyIcons from "./ModifyIcons";
import { updateSingleExpenseInDb } from "../../../../../utils/setUpdateData";
function SingleExpenseCard({
  title,
  value,
  category,
  description,
  IBAN,
  refMsg,
  id,
  checked,
}) {
  //write code here
  const payExpenseOrNot = async () => {
    // this function is only to select the expense or deselect it.
    try {
      await updateSingleExpenseInDb(`${id}/checked`, !checked);
    } catch (error) {
      console.error("error occurred", error.message);
    }
  };

  return (
    <Box
      sx={{
        border: "5px solid",
        borderColor: checked ? "#6db30c" : "#ff0000",
        borderRadius: 5,
        p: 2,
        position: "relative",
      }}
      bgcolor="white"
      boxShadow={2}
    >
      <Checkbox
        checked={checked}
        onChange={payExpenseOrNot}
        icon={<CheckCircleOutlineIcon color="error" />}
        checkedIcon={<CheckCircleIcon />}
        color="success"
        sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
      />
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
