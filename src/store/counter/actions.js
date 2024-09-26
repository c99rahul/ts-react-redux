// src/store/counter/actions.ts
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

export const increment = (numberToIncrement = 1) => ({
  type: INCREMENT,
  payload: {
    incrementBy: numberToIncrement,
  },
});
export const decrement = (numberToDecrement = 1) => ({
  type: DECREMENT,
  payload: {
    decrementBy: numberToDecrement,
  },
});
