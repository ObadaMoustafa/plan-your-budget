import { useEffect, useRef, useState } from "react";
import { Box, Fab, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { auth } from "../../../../firebaseConfige";

function AddYourIncome() {
  //write code here
  const incomeEl = useRef();
  const [shouldModify, setShouldModify] = useState(false);
  const { uid } = auth.currentUser;
  const [income, setIncome] = useState(0);

  function editIncome() {
    if (shouldModify) {
      const value = incomeEl.current.value || income;
      const db = getDatabase();
      set(ref(db, `users/${uid}/income`), value).then(() => {
        setIncome(value);
        setShouldModify(false);
      });
    } else {
      setShouldModify(true);
    }
  }

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}/income`))
      .then((snapshot) => {
        if (snapshot.exists()) setIncome(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box>
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
    </Box>
  );
}

export default AddYourIncome;
