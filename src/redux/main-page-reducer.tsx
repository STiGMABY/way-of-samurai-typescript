import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type SetUserProfileType = {
    type: 'SET_USER_PROFILE',
    profile: ProfileType
}

type MainPageReducerActionTypes =
    | AddPostActionType
    | UpdateNewPostTextType
    | SetUserProfileType

type MainPagePostsListType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk:string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink:string
    }
    photos: {
        small: string
        large: string
    }
}

export type initialStateType = {
    mainPagePostsList: Array<MainPagePostsListType>
    newPostText: string,
    profile: null | ProfileType
}

let initialState: initialStateType = {
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

export const mainPageReducer = (state = initialState, action: MainPageReducerActionTypes): initialStateType=> {
    switch (action.type) {
        case ADD_POST: {
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
        case UPDATE_NEW_POST_TEXT: {
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

export const addPost = () => ({type: ADD_POST})

export const updateNewPostTest = (newPostText: string) => ({type: UPDATE_NEW_POST_TEXT, newPostText})

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getMainContent(userId)
        .then(response => {
            //debugger
            dispatch(setUserProfile(response.data))
        })
}

