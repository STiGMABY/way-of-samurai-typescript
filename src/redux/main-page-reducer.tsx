import {v1} from "uuid";
import {MainPageDataType} from "./store";

const SET_USER_PROFILE = 'SET_USER_PROFILE'

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type SetUserProfileType = {
    type: 'SET_USER_PROFILE',
    profile: {}
}

type MainPageReducerActionTypes =
    | AddPostActionType
    | UpdateNewPostTextType
    | SetUserProfileType

let initialState = {
    mainPagePostsList: [
        {id: v1(), message: 'HTML', likesCount: 3},
        {id: v1(), message: 'CSS', likesCount: 5},
        {id: v1(), message: 'React', likesCount: 3},
        {id: v1(), message: 'Have a nice day', likesCount: 9},
        {id: v1(), message: 'Lern hard!', likesCount: 6}
    ],
    newPostText: '',
    profile: null
}

export const mainPageReducer = (state: MainPageDataType = initialState, action: MainPageReducerActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let post = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            //redux не понимает, что мы что то изменили внутри стейта, для него стейт остался тем же.
            // Поэтому не будет перерисовки. Мы должны селать копию стейта.

            let stateCopy = {...state} //делаем копию стейта (поверхностная)
            stateCopy.mainPagePostsList = [...state.mainPagePostsList] //создаем новый массив равный старому (глубокая)
            stateCopy.mainPagePostsList.unshift(post)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newPostText
            return stateCopy
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const setUserProfile = (profile: any): SetUserProfileType => ({type: SET_USER_PROFILE, profile})