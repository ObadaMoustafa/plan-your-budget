export const APP_ACTIONS = {
  GET_OR_SET_INCOME: "GET_OR_SET_INCOME",
  GET_EXPENSES: "GET_EXPENSES",
  SET_EXPENSES: "SET_EXPENSES",
  PUSH_AN_EXPENSE: "PUSH_AN_EXPENSE",
  SET_TOTAL_EXPENSES: "SET_TOTAL_EXPENSES",
  GET_TOTAL_EXPENSES: "GET_TOTAL_EXPENSES",
  SET_REST_MONEY: "SET_REST_MONEY",
};

export const APP_INITIAL_STATE = {
  income: 0,
  expenses: {},
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
    case APP_ACTIONS.SET_TOTAL_EXPENSES: {
      state.totalExpenses = action.payload;

      break;
    }

    case APP_ACTIONS.SET_REST_MONEY: {
      state.restMoney = action.payload;
      break;
    }

    default:
      throw new Error("you should add type");
  }
};
