import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstantes";
import api from '../../api';

export const signin = ({user_email, user_password}) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { user_email, user_password } });
    try {
      const { data } = await api.signinUser(user_email, user_password);
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_SIGNIN_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  }; 

  export const register = ({email, name, password}) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { email, name, password } });
    try {
      const { data } = await api.registerUser({email, password, name});
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  }; 


  export const signout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/";
  };