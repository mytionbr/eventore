import {
  USER_COMMUNITY_EVENTS_FAIL,
  USER_COMMUNITY_EVENTS_REQUEST,
  USER_COMMUNITY_EVENTS_SUCCESS,
  USER_CREATE_EVENT_FAIL,
  USER_CREATE_EVENT_REQUEST,
  USER_CREATE_EVENT_RESET,
  USER_CREATE_EVENT_SUCCESS,
  USER_MY_EVENTS_FAIL,
  USER_MY_EVENTS_REQUEST,
  USER_MY_EVENTS_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_REGISTER_EVENT_FAIL,
  USER_REGISTER_EVENT_REQUEST,
  USER_REGISTER_EVENT_RESET,
  USER_REGISTER_EVENT_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REMOVE_EVENT_FAIL,
  USER_REMOVE_EVENT_REQUEST,
  USER_REMOVE_EVENT_RESET,
  USER_REMOVE_EVENT_SUCCESS,
  USER_SCHEDULE_EVENTS_FAIL,
  USER_SCHEDULE_EVENTS_REQUEST,
  USER_SCHEDULE_EVENTS_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_UNREGISTER_EVENT_FAIL,
  USER_UNREGISTER_EVENT_REQUEST,
  USER_UNREGISTER_EVENT_RESET,
  USER_UNREGISTER_EVENT_SUCCESS,
  USER_UPDATE_EVENT_FAIL,
  USER_UPDATE_EVENT_REQUEST,
  USER_UPDATE_EVENT_RESET,
  USER_UPDATE_EVENT_SUCCESS,
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
  state = { loading: true, data: [] },
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
  state = { loading: true, data: [] },
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
  state = { loading: true, data: [] },
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

export const userProfileReducer = (
    state = { loading: true },
    action
  ) => {
    switch (action.type) {
      case USER_PROFILE_REQUEST:
        return { loading: true };
      case USER_PROFILE_SUCCESS:
        return { loading: false, data: action.payload };
      case USER_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const eventCreateReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case USER_CREATE_EVENT_REQUEST:
        return { loading: true };
      case USER_CREATE_EVENT_SUCCESS:
        return { loading: false, data: action.payload };
      case USER_CREATE_EVENT_FAIL:
        return { loading: false, error: action.payload };
    case USER_CREATE_EVENT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const eventUpdateReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case USER_UPDATE_EVENT_REQUEST:
        return { loading: true };
      case USER_UPDATE_EVENT_SUCCESS:
        return { loading: false, data: action.payload };
      case USER_UPDATE_EVENT_FAIL:
        return { loading: false, error: action.payload };
    case USER_UPDATE_EVENT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const eventRemoveReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case USER_REMOVE_EVENT_REQUEST:
        return { loading: true };
      case USER_REMOVE_EVENT_SUCCESS:
        return { loading: false, data: action.payload };
      case USER_REMOVE_EVENT_FAIL:
        return { loading: false, error: action.payload };
    case USER_REMOVE_EVENT_RESET:
        return {};
      default:
        return state;
    }
  };

  export const eventRegisterReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case USER_REGISTER_EVENT_REQUEST:
        return { loading: true };
      case USER_REGISTER_EVENT_SUCCESS:
        return { loading: false, data: action.payload };
      case USER_REGISTER_EVENT_FAIL:
        return { loading: false, error: action.payload };
    case USER_REGISTER_EVENT_RESET:
        return {};
      default:
        return state;
    }
  };


  export const eventUnregisterReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case USER_UNREGISTER_EVENT_REQUEST:
        return { loading: true };
      case USER_UNREGISTER_EVENT_SUCCESS:
        return { loading: false, data: action.payload };
      case USER_UNREGISTER_EVENT_FAIL:
        return { loading: false, error: action.payload };
    case USER_UNREGISTER_EVENT_RESET:
        return {};
      default:
        return state;
    }
  };