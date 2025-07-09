import { actions } from "./actions";

const initialState = {
    isLoggedIn: false,
    userName: '',
    tableRemaining: 0,
    isLoading: false,
};

const reducer = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case actions.LOGOUT:
            return {
                ...state,
                isLoggedIn: action.payload,
                username: ''
            };
        case actions.CHANGE_NAME:
            return {
                ...state,
                username: action.payload
            };
        case actions.UPDATE_TABLE_REMAINING:
            return {
                ...state,
                tableRemaining: action.payload
            };
        case  actions.SET_TABLES:
            return {
                ...state,
                tableRemaining: action.payload
            };
        case actions.START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case actions.STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export default reducer;