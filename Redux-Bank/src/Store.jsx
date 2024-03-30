import { useReducer } from "react";
import { createStore } from "redux";

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
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: state.loan - action.payload,
        balance: state.balance - action.payload,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

// function Store() {
//   const [{ balance, loan, loanPurpose }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );
// }

const store = createStore(reducer);

// store.dispatch({ type: "account/deposit", payload: 500 });

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan(amount) {
  return { type: "account/payLoan", payload: amount };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(500, "buy cheap car"));
store.dispatch(payLoan(500));

console.log(store.getState());
