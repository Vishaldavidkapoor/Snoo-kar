const initialState = {
    isLoggedIn: false,
    username: ''
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
        default:
            return state;
    }
};

export default reducer;