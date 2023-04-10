import { useRef, useState } from "react";
import { Fab, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function AddYourIncome() {
  //write code here
  const incomeEl = useRef();
  const [shouldModify, setShouldModify] = useState(false);
  const [income, setIncome] = useState(500);

  function editIncome() {
    if (shouldModify) {
      const value = incomeEl.current.value || income;
      setIncome(value);
      setShouldModify(false);
    } else {
      setShouldModify(true);
    }
  }
  return (
    <>
      <Typography variant="h3">Income {income} €/month</Typography>
      <Fab onClick={editIncome}>
        <EditIcon />
      </Fab>
      {shouldModify && (
        <TextField
          type="number"
          label="New income"
          placeholder="ex. 5000"
          inputRef={incomeEl}
        />
      )}
    </>
  );
}

export default AddYourIncome;
