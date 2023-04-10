export const ADD_EXPENSES_ACTIONS = {
  CHANGE_FIELD: "change field",
};

export const addExpensesInitial = {
  title: "",
  value: "",
  category: "",
  description: "",
  IBAN: "",
  ref: "",
};

export const addExpensesReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSES_ACTIONS.CHANGE_FIELD: {
      const property = action.key;
      state[property] = action.payload;
    }
  }
};
