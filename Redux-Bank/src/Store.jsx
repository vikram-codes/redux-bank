import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdrawal":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}

function Store() {
  const [{ balance, loan, loanPurpose }, dispatch] = useReducer(
    reducer,
    initialState
  );
}
