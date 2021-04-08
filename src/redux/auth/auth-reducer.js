import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./auth-actions";

const userInitialState = { email: "", password: "" };
const user = createReducer(userInitialState, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
});
