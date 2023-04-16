export const ADD_EXPENSES_ACTIONS = {
  CHANGE_FIELD: "change field",
  SET_FIELDS: "SET_FIELDS",
  RESET: "RESET",
};

export const addExpensesInitial = {
  title: "",
  value: "",
  category: "",
  description: "",
  IBAN: "",
  refMsg: "",
};

export const addExpensesReducer = (state = addExpensesInitial, action) => {
  switch (action.type) {
    case ADD_EXPENSES_ACTIONS.CHANGE_FIELD: {
      let value = action.payload;
      const key = action.key;
      if (key === "value") value = Number(value);
      state[key] = value;
      break;
    }

    case ADD_EXPENSES_ACTIONS.SET_FIELDS: {
      const { title, value, category, description, IBAN, refMsg } =
        action.payload;
      state.title = title || "";
      state.value = value || "";
      state.category = category || "";
      state.description = description || "";
      state.IBAN = IBAN || "";
      state.refMsg = refMsg || "";
      break;
    }

    case ADD_EXPENSES_ACTIONS.RESET: {
      state.title = "";
      state.value = "";
      state.category = "";
      state.description = "";
      state.IBAN = "";
      state.refMsg = "";
      break;
    }

    default:
      throw new Error("you should add type");
  }
};
