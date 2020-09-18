const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type ActionsType = FollowUserType | UnfollowUserType | SetUsersType

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
    users: Array<UserType>
}

type InitialStateType = {
    users: Array<UserType>
}

export type UserType
    = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}


let initialState = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, //делаем копию всего стейта
                //users: [...state, users], тоже самое что запись ниже
                users: state.users.map(u => { //делаем копию users
                    if (u.id === action.userID) {
                        return {...u, followed: true} //делаем копию юзера которого нужно поменять
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                //users: [...state, users], тоже самое что запись ниже
                users: state.users.map(u => {
                    if (u.id === action.userID) {
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
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
