import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer.js";
import requestingReducer from "./requestingReducer";
import sessionsReducer from "./sessionsReducer";
import budgetReducer from "./budgetReducer";
import transactionReducer from "./transactionReducer"

export default combineReducers({
  errors: errorsReducer,
  requesting: requestingReducer,
  sessions: sessionsReducer,
  budgets: budgetReducer,
  transactions:transactionReducer
})