import {Dispatch} from "redux";
import {getUserAuthData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

export type AuthReducerActionsType = SetUserDataType

type SetUserDataType = {
    type: 'INITIALIZED_SUCCESS'
}

export type InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType= initialState, action: AuthReducerActionsType): InitialStateType => {
    //debugger
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getUserAuthData())

    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess())
    })

}

