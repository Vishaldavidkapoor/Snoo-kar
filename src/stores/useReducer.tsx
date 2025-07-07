const initialState = {
    isLoggedIn: false,
    username: '',
    tableRemaining: 5,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: action.payload,
                username: ''
            };
        case 'CHANGE_NAME':
            return {
                ...state,
                username: action.payload
            };
        case 'UPDATE_TABLE_REMAINING':
            return {
                ...state,
                tableRemaining: action.payload
            };
        default:
            return state;
    }
};

export default reducer;