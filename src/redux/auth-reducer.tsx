const SET_USER_DATA = 'SET_USER_DATA'

export type AuthReducerActionsType = SetUserDataType

type SetUserDataType = {
    type: 'SET_USER_DATA'
    data: {
        userId: string
        email: string
        login: string
    }
    // userId: string
    // email: string
    // login: string
}

type InitialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
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
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: string, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login} })

