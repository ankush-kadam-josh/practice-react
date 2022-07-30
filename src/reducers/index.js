import { combineReducers } from "redux";
import { numberReducer } from "./numberReducer";
import { userListReducer } from "./userListReducer";
//create rootReducer and add all reducers of this web applications
export const rootReducer = combineReducers({
  numberReducer,
  userListReducer,
});

export default rootReducer;
