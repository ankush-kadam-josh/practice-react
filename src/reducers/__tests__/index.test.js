import { combineReducers } from "redux";
import { rootReducer } from "..";
import { numberReducer } from "../numberReducer";
import { userListReducer } from "../userListReducer";

describe("Test cases for indexReducer", () => {
  it("Must return a combined reducer same as root reducer", () => {
    const combinedReducersToTest = combineReducers({
      numberReducer,
      userListReducer,
    });
    expect(typeof combinedReducersToTest).toEqual(typeof rootReducer);
  });
});
