// store/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
});
