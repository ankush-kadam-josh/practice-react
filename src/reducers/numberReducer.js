import { numberActions } from "../actions/numberActions";

const initialState = {
  counter: 0,
};

export const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case numberActions.increment:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case numberActions.decrement:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case numberActions.reset:
      return {
        ...state,
        counter: initialState.counter,
      };
    case numberActions.incrementBy:
      return {
        ...state,
        counter: state.counter + action.payload.value,
      };
    case numberActions.decrementBy:
      return {
        ...state,
        counter: state.counter - action.payload.value,
      };

    default:
      return state;
  }
};
