// src/reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./user";
import newsFeedReducer from "./newsfeed";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
  user: userReducer,
  newsfeed: newsFeedReducer,
  messages: messagesReducer,
});

export default rootReducer;
