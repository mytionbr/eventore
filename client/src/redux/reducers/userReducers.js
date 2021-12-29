import {
  USER_COMMUNITY_EVENTS_FAIL,
  USER_COMMUNITY_EVENTS_REQUEST,
  USER_COMMUNITY_EVENTS_SUCCESS,
  USER_MY_EVENTS_FAIL,
  USER_MY_EVENTS_REQUEST,
  USER_MY_EVENTS_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SCHEDULE_EVENTS_FAIL,
  USER_SCHEDULE_EVENTS_REQUEST,
  USER_SCHEDULE_EVENTS_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from '../constants/userConstantes';

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const myEventsReducer = (
  state = { loading: true, cursos: [] },
  action
) => {
  switch (action.type) {
    case USER_MY_EVENTS_REQUEST:
      return { loading: true };
    case USER_MY_EVENTS_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_MY_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const communityEventsReducer = (
  state = { loading: true, cursos: [] },
  action
) => {
  switch (action.type) {
    case USER_COMMUNITY_EVENTS_REQUEST:
      return { loading: true };
    case USER_COMMUNITY_EVENTS_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_COMMUNITY_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const scheduleEventsReducer = (
  state = { loading: true, cursos: [] },
  action
) => {
  switch (action.type) {
    case USER_SCHEDULE_EVENTS_REQUEST:
      return { loading: true };
    case USER_SCHEDULE_EVENTS_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_SCHEDULE_EVENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
