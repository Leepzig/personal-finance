import { combineReducers } from "redux";
import errorReducer from "./errorReducer.js";
import requestingReducer from "./requestingReducer";
import sessionReducer from "./sessionReducer";
import budgetReducer from "./budgetReducer";

export default combineReducers({
  errors: errorReducer,
  requesting: requestingReducer,
  sessions: sessionReducer,
  budgets: budgetReducer,
})