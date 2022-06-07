import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";

//create rootReducer and add all reducers of this web applications
const rootReducer = combineReducers({
  numberReducer,
});

export default rootReducer;
