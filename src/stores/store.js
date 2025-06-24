import { combineReducers, createStore } from 'redux';
import reducer from './useReducer';

const initialState = {
  userName: '',
  isLoggedIn: false,
  tableRemaining: 5,
}
const rootReducer = combineReducers({
  userData: reducer,
});

export const store = createStore(rootReducer);
