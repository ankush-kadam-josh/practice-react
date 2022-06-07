import { numberActions } from "../actions/numberActions";

//increment counter by 1
export const incrementCounter = () => ({
  type: numberActions.increment,
  // payload: {},//no need here
});

//decrement counter by 1
export const decrementCounter = () => ({
  type: numberActions.decrement,
});

//reset counter to 0
export const resetCounter = () => ({
  type: numberActions.reset,
});

//increment counter by value
export const incrementByCounter = (value) => ({
  type: numberActions.incrementBy,
  payload: { value },
});

//decrement counter by value
export const decrementByCounter = (value) => ({
  type: numberActions.decrementBy,
  payload: { value },
});
