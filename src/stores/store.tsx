import { combineReducers, createStore } from 'redux';
import reducer from './useReducer';

const rootReducer = combineReducers({
  userData: reducer,
});

export const store = createStore(rootReducer);
