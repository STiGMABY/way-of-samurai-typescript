const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type ActionsType = FollowUserType | UnfollowUserType | SetUsersType | SetCurrentPageType | TotalUsersCountType

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
type SetCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
type TotalUsersCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    count: number
}

type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4,
    count: 0
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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
             return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_USERS_COUNT': {
             return {...state, totalUsersCount: action.count}
        }
        default:
            return state
    }
}

export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: string) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})