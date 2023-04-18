import { Fab, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import BackdropForm from "../../../../../../components/BackdropForm";
import DeleteConfirmation from "../../../../../../components/DeleteConfirmation";
import EditIncomeForm from "./EditIncomeForm";

function ActionButtons({ incomeKey }) {
  //write code here
  const [shouldEdit, setShouldEdit] = useState(false);
  const [shouldDelete, setShouldDelete] = useState(false);
  const openEditBackDrop = () => setShouldEdit(true);
  const closeEditBackDrop = () => setShouldEdit(false);
  const openDeleteBackDrop = () => setShouldDelete(true);
  return (
    <Grid container spacing={2} justifyContent="flex-end">
      <Grid item>
        <Fab color="warning" size="small" onClick={openEditBackDrop}>
          <EditIcon fontSize="small" />
        </Fab>
        {shouldEdit && (
          <BackdropForm setOpen={setShouldEdit}>
            <EditIncomeForm id={incomeKey} close={closeEditBackDrop} />
          </BackdropForm>
        )}
      </Grid>
      <Grid item>
        <Fab color="error" size="small" onClick={openDeleteBackDrop}>
          <DeleteIcon fontSize="small" />
        </Fab>
        {shouldDelete && (
          <BackdropForm setOpen={setShouldDelete}>
            <DeleteConfirmation
              text="Are you sure to delete this income ?"
              id={incomeKey}
              shouldDelete="income"
              setOpen={setShouldDelete}
            />
          </BackdropForm>
        )}
      </Grid>
    </Grid>
  );
}

export default ActionButtons;
