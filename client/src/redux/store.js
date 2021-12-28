import { createStore,  applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userSignin: {
    userInfo: userInfo,
  },
};

const reducer = combineReducers({});


const store = createStore(
  reducer,
  initialState,
  combineReducers(applyMiddleware(thunk))
);

export default store;
