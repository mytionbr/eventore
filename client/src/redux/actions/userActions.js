import { USER_COMMUNITY_EVENTS_FAIL, USER_COMMUNITY_EVENTS_REQUEST, USER_COMMUNITY_EVENTS_SUCCESS, USER_CREATE_EVENT_FAIL, USER_CREATE_EVENT_REQUEST, USER_CREATE_EVENT_SUCCESS, USER_MY_EVENTS_FAIL, USER_MY_EVENTS_REQUEST, USER_MY_EVENTS_SUCCESS, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SCHEDULE_EVENTS_FAIL, USER_SCHEDULE_EVENTS_REQUEST, USER_SCHEDULE_EVENTS_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstantes";
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

  export const findEventsByUser = ({user_id}) => async (dispatch,getState) => {
    const {
      userSignin: { userInfo },
    } = getState();

    dispatch({
      type: USER_MY_EVENTS_REQUEST,
    });
    try {
      const { data } = await api.findMyEvents({
        user_id,
        userInfo
      });

      console.log(data)
  
      dispatch({ type: USER_MY_EVENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_MY_EVENTS_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  };

  export const findCommunityEvents = () => async (dispatch,getState) => {
    const {
      userSignin: { userInfo },
    } = getState();

    dispatch({
      type: USER_COMMUNITY_EVENTS_REQUEST,
    });
    try {
      const { data } = await api.findCommunityEvents({userInfo});
  
      dispatch({ type: USER_COMMUNITY_EVENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_COMMUNITY_EVENTS_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  };

  export const findScheduleEvents = () => async (dispatch,getState) => {
    const {
      userSignin: { userInfo },
    } = getState();

    dispatch({
      type: USER_SCHEDULE_EVENTS_REQUEST,
    });
    try {
      const { data } = await api.findScheduleEvents({userInfo});
  
      dispatch({ type: USER_SCHEDULE_EVENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_SCHEDULE_EVENTS_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  };

  export const findUserProfile = () => async (dispatch,getState) => {
    const {
      userSignin: { userInfo },
    } = getState();

    dispatch({
      type: USER_PROFILE_REQUEST,
    });
    try {

      const { data } = await api.findUserProfile({userInfo});
  
      dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  };

  export const createEvent = (event) => async (dispatch,getState) => {
    const {
      userSignin: { userInfo },
    } = getState();

    dispatch({
      type: USER_CREATE_EVENT_REQUEST,
    });
    try {
      event.user_id = userInfo.user_id
      const { data } = await api.createEvent({userInfo,event});
  
      dispatch({ type: USER_CREATE_EVENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: USER_CREATE_EVENT_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  };