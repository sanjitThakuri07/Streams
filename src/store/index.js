import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./app/reducers/authReducer";
import streamReducer from "./streams/reducers";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
