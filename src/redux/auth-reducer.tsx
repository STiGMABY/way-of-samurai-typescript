import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

export type AuthReducerActionsType = SetUserDataType

type SetUserDataType = {
    type: 'SET_USER_DATA'
    data: {
        userId: string | null
        email: string | null
        login: string | null
    }
}

export type InitialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    userId: null ,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType= initialState, action: AuthReducerActionsType): InitialStateType => {
    //debugger
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth} })

export const getUserAuthData = () => (dispatch: Dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getUserAuthData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}