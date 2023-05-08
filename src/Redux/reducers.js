// src/reducers/index.js
import { combineReducers } from "redux";
import userReducer from "./user";
import newsFeedReducer from "./newsfeed";
import messagesReducer from "./messages";
import eventsReducer from "./events";

const rootReducer = combineReducers({
  user: userReducer,
  newsfeed: newsFeedReducer,
  messages: messagesReducer,
  events: eventsReducer,
});

export default rootReducer;
