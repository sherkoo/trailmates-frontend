// src/reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
