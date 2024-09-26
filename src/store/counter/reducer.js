import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload.incrementBy };
    case DECREMENT:
      return { ...state, value: state.value - action.payload.decrementBy };
    default:
      return state;
  }
};
