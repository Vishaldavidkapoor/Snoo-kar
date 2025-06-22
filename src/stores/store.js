import { combineReducers, createStore } from 'redux';

const initialState = {
  userName: '',
  isLoggedIn: false,
};

const rootReducer = combineReducers({
  userData: () => {
    return initialState;
  },
});

export const store = createStore(rootReducer);
