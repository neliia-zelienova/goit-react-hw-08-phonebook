import axios from "axios";
import actions from "./auth-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const register = (userData) => async (dispatch) => {
  dispatch(actions.registerRequest());
  try {
    const response = await axios.post("/users/signup", userData);
    dispatch(actions.registerSuccess(response.data));
  } catch (error) {
    dispatch(actions.registerError(error.message));
  }
};

const login = (userData) => async (dispatch) => {
  dispatch(actions.loginRequest());
 try {
   const response = await axios.post("/users/login", userData);
   dispatch(actions.loginSuccess(response.data));
 } catch (error) {
   dispatch(actions.loginError(error.message));
 }
};

const logout = () => (dispatch) => {};

const getUserData = () => (dispatch) => {};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getUserData,
};
