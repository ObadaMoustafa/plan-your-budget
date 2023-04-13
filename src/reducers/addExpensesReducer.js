export const ADD_EXPENSES_ACTIONS = {
  CHANGE_FIELD: "change field",
  RESET: "RESET",
};

export const addExpensesInitial = {
  title: "lidl",
  value: "550",
  category: "food",
  description: "any description",
  IBAN: "NL 1234 ING 02154 2134",
  ref: "factuur nummer 55621",
};

export const addExpensesReducer = (state = addExpensesInitial, action) => {
  switch (action.type) {
    case ADD_EXPENSES_ACTIONS.CHANGE_FIELD: {
      const property = action.key;
      state[property] = action.payload;
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
