export const ADD_EXPENSES_ACTIONS = {
  CHANGE_FIELD: "change field",
  RESET: "RESET",
};

export const addExpensesInitial = {
  title: "",
  value: "",
  category: "",
  description: "",
  IBAN: "",
  ref: "",
};

export const addExpensesReducer = (state = addExpensesInitial, action) => {
  switch (action.type) {
    case ADD_EXPENSES_ACTIONS.CHANGE_FIELD: {
      const value = action.payload;
      const useableValue = isNaN(value) ? value : Number(value);
      const key = action.key;
      state[key] = useableValue;
      break;
    }
    case ADD_EXPENSES_ACTIONS.RESET: {
      state.title = "";
      state.value = "";
      state.category = "";
      state.description = "";
      state.IBAN = "";
      state.ref = "";
      break;
    }

    default:
      throw new Error("you should add type");
  }
};
