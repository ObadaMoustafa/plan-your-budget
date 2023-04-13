export const APP_ACTIONS = {
  GET_OR_SET_INCOME: "GET_OR_SET_INCOME",
  GET_EXPENSES: "GET_EXPENSES",
  SET_EXPENSES: "SET_EXPENSES",
  PUSH_AN_EXPENSE: "PUSH_AN_EXPENSE",
  GET_TOTAL_EXPENSES: "GET_TOTAL_EXPENSES",
  GET_REST_MONEY: "GET_REST_MONEY",
  SET_REST_MONEY: "SET_REST_MONEY",
};

export const APP_INITIAL_STATE = {
  income: 0,
  expenses: null,
  totalExpenses: 0,
  restMoney: 0,
};

export const appReducer = (state = APP_INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_ACTIONS.GET_OR_SET_INCOME: {
      state.income = action.payload;
      break;
    }

    case APP_ACTIONS.SET_EXPENSES: {
      state.expenses = action.payload;
      break;
    }

    case APP_ACTIONS.PUSH_AN_EXPENSE: {
      const key = action.key;
      state.expenses[key] = action.payload;

      break;
    }

    case APP_ACTIONS.GET_TOTAL_EXPENSES: {
      const totalExpenses = state.expenses.reduce((a, b) => a + b, 0);
      state.totalExpenses = totalExpenses;
      break;
    }

    default:
      throw new Error("you should add type");
  }
};
