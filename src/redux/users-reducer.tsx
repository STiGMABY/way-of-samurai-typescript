import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type ActionsType = FollowUserType | UnfollowUserType | SetUsersType

type FollowUserType = {
    type: 'FOLLOW'
    userID: string
}

type UnfollowUserType = {
    type: 'UNFOLLOW'
    userID: string
}

type SetUsersType = {
    type: 'SET-USERS'
    users: Array<UsersListPageType>
}

type UserLocationType = {
    city: string
    country: string
}

export type UsersListPageType = {
    id: string
    fotoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

type InitialStateType = {
    users: Array<UsersListPageType>
}

let initialState = {
    users:   [
        // {id: v1(), fotoUrl: '', followed: false, fullName: 'Andrei',status: 'I am a boss',location: {city: 'Grodno', country: 'Belarus'}},
        // {id: v1(), fotoUrl: '', followed: true, fullName: 'Lera',status: 'I am maid',location: {city: 'Grodno', country: 'Belarus'}},
        // {id: v1(), fotoUrl: '', followed: true, fullName: 'Musia', status: 'I am a cat', location: {city: 'Boston', country: 'USA'}},
        // {id: v1(), fotoUrl: '', followed: false, fullName: 'Vasia',status: 'Just a guy',location: {city: 'Berlin', country: 'Germany'}},
        // {id: v1(), fotoUrl: '', followed: false, fullName: 'Kolia',status: 'No info',location: {city: 'Belastok', country: 'Poland'}},
    ]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                //users: [...state, users], тоже самое что запись ниже
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                //users: [...state, users], тоже самое что запись ниже
                users: state.users.map(u => {
                    if(u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UsersListPageType>) => ({type: SET_USERS, users})
