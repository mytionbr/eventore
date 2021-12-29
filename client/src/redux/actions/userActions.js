import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstantes";
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