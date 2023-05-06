// src/reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./user";
import newsFeedReducer from "./newsfeed";

const rootReducer = combineReducers({
  user: userReducer,
  newsfeed: newsFeedReducer,
});

export default rootReducer;
