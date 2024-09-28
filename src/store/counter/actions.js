// src/store/counter/actions.js

import { createAction } from "@reduxjs/toolkit";

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

export const increment = createAction(INCREMENT, (numberToIncrement = 1) => ({
  payload: {
    incrementBy: numberToIncrement,
  },
}));

export const decrement = createAction(DECREMENT, (numberToDecrement = 1) => ({
  payload: {
    decrementBy: numberToDecrement,
  },
}));
