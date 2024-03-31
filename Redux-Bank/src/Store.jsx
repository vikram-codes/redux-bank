// import { useReducer } from "react";
import { createStore, combineReducers } from "redux";

import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";

// function Store() {
//   const [{ balance, loan, loanPurpose }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );
// }

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });

console.log(store.getState());
