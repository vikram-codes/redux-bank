// import { useReducer } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";

import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState());

export default store;
