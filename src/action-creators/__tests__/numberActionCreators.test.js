import { numberActions } from "../../actions/numberActions";
import {
  decrementByCounter,
  decrementCounter,
  incrementByCounter,
  incrementCounter,
  resetCounter,
} from "../numberActionCreators";

describe("Number action creators tests", () => {
  it("incrementCounter", () => {
    expect(incrementCounter()).toEqual({
      type: numberActions.increment,
    });
  });

  it("decrementCounter", () => {
    expect(decrementCounter()).toEqual({
      type: numberActions.decrement,
    });
  });

  it("resetCounter", () => {
    expect(resetCounter()).toEqual({
      type: numberActions.reset,
    });
  });

  it("incrementByCounter", () => {
    expect(incrementByCounter(3)).toEqual({
      type: numberActions.incrementBy,
      payload: { value: 3 },
    });
  });

  it("decrementByCounter", () => {
    expect(decrementByCounter(3)).toEqual({
      type: numberActions.decrementBy,
      payload: { value: 3 },
    });
  });
});
