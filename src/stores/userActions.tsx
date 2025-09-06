import { actions } from "./actions"

export const loginAction = () =>{
    return {
        type: actions.LOGIN,
        payload: true,
    }
}

export const loginOutAction = () =>{
    return {
        type: actions.LOGOUT,
        payload: false,
    }
}

export const changeNameAction = (username: string) =>{
    return {
        type: actions.CHANGE_NAME,
        payload: username,
    }
}

export const updateTableRemaining = (tables: number) =>{
    return {
        type: actions.UPDATE_TABLE_REMAINING,
        payload: tables,
    }
}

export const setTablesAction = (tables: number) =>{
    return {
        type: actions.SET_TABLES,
        payload: tables,
    }
}

export const startLoading = () => {
    return {
        type: actions.START_LOADING,
    }
}

export const stopLoading = () => {
    return {
        type: actions.STOP_LOADING,
    }
}