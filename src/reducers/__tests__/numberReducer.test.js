import {
  decrementByCounter,
  decrementCounter,
  incrementByCounter,
  incrementCounter,
  resetCounter,
} from "../../action-creators/numberActionCreators";
import { numberReducer, initialState } from "../numberReducer";

describe("Number reducer tests", () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it("testing incrementCounter", () => {
    const updatedState = {
      ...state,
      counter: 1,
    };
    expect(numberReducer(state, incrementCounter())).toEqual(updatedState);
  });

  it("testing decrementCounter", () => {
    const updatedState = {
      ...state,
      counter: -1,
    };
    expect(numberReducer(state, decrementCounter())).toEqual(updatedState);
  });

  it("testing resetCounter", () => {
    const updatedState = {
      ...state,
      counter: 0,
    };
    expect(numberReducer(state, resetCounter())).toEqual(updatedState);
  });

  it("testing incrementByCounter", () => {
    const value = 10;
    const updatedState = {
      ...state,
      counter: value,
    };
    expect(numberReducer(state, incrementByCounter(value))).toEqual(
      updatedState
    );
  });

  it("testing decrementByCounter", () => {
    const value = 10;
    const updatedState = {
      ...state,
      counter: value * -1,
    };
    expect(numberReducer(state, decrementByCounter(value))).toEqual(
      updatedState
    );
  });
});
