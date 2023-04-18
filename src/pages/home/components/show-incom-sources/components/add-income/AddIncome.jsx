import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Button } from "@mui/material";
import { useState } from "react";
import BackdropForm from "../../../../../../components/BackdropForm";
import AddIncomeForm from "./AddIncomForm";

function AddIncome() {
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const open = () => {
    setOpenBackDrop(true);
  };
  return (
    <>
      <Button
        startIcon={<TrendingUpIcon />}
        color="success"
        variant="contained"
        size="large"
        onClick={open}
      >
        add income
      </Button>
      {openBackDrop && (
        <BackdropForm setOpen={setOpenBackDrop}>
          <AddIncomeForm />
        </BackdropForm>
      )}
    </>
  );
}

export default AddIncome;
