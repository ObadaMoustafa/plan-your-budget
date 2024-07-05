import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Button } from "@mui/material";
import { useState } from "react";
import BackdropForm from "../../../../../../components/BackdropForm";
import AddIncomeForm from "./AddIncomForm";
import AddButton from "../../../show-expenses/components/add-expenses/AddButton";

function AddIncome() {
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const closeBackDrop = () => setOpenBackDrop(false);

  return (
    <>
      <AddButton
        onclick={setOpenBackDrop}
        color="success"
        btnIcon={<TrendingUpIcon />}
      >
        Add income
      </AddButton>
      {openBackDrop && (
        <BackdropForm setOpen={setOpenBackDrop}>
          <AddIncomeForm close={closeBackDrop} />
        </BackdropForm>
      )}
    </>
  );
}

export default AddIncome;
