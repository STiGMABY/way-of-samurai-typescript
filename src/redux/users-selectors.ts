import {AppStateType} from "./redux-store";
import {createSelector} from 'reselect'

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

//Пример сложного реселектора
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true)
    })

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrantPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}