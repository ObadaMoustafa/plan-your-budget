export const ADD_INCOME_ACTIONS = {
  CHANGE_FIELD: "CHANGE_FIELD",
  SET_FIELDS: "SET_FIELDS",
  RESET: "RESET",
};

export const addIncomeInit = {
  title: "",
  value: "",
};

export const addIncomeReducer = (state, action) => {
  switch (action.type) {
    case ADD_INCOME_ACTIONS.CHANGE_FIELD: {
      let value = action.payload;
      const key = action.key;
      if (key === "value") value = Number(value);
      state[key] = value;
      break;
    }

    // for edit form to set the data like db.
    case ADD_INCOME_ACTIONS.SET_FIELDS: {
      const { title, value } = action.payload;
      state.title = title || "";
      state.value = value || "";
      break;
    }

    case ADD_INCOME_ACTIONS.RESET: {
      state.title = "";
      state.value = "";
      break;
    }

    default:
      throw new Error("you should add type");
  }
};
