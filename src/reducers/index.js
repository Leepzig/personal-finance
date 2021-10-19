import { combineReducers } from "redux";
import errorReducer from "./errorReducer.js";
import requestingReducer from "./requestingReducer";
import sessionReducer from "./sessionReducer";
import budgetReducer from "./budgetReducer";
import transactionReducer from "./transactionReducer"

export default combineReducers({
  errors: errorReducer,
  requesting: requestingReducer,
  sessions: sessionReducer,
  budgets: budgetReducer,
  transactions:transactionReducer
})