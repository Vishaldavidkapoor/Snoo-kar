export const loginAction = () =>{
    return {
        type: 'LOGIN',
        payload: true,
    }
}

export const loginOutAction = () =>{
    return {
        type: 'LOGOUT',
        payload: false,
    }
}

export const changeNameAction = (username) =>{
    return {
        type: 'CHANGE_NAME',
        payload: username,
    }
}

export const updateTableRemaining = (tables) =>{
    return {
        type: 'UPDATE_TABLE_REMAINING',
        payload: tables,
    }
}