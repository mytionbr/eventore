import { createStore,compose,  applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { communityEventsReducer, myEventsReducer, scheduleEventsReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducers';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userSignin: {
    userInfo: userInfo,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  myEvents:myEventsReducer,
  communityEvents:communityEventsReducer,
  scheduleEvents:scheduleEventsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
