import { combineReducers } from "redux";
import app from "./app/app.reducer";

const rootReducer = combineReducers({
  app: app
});

export default rootReducer;
