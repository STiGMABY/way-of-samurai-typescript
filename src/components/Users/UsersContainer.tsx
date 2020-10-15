import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress, UserType, getUsers,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import preloader from '../../assets/images/preloader.gif'

export type UsersContainerPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    //setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currantPage: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //toggleIsFetching: (isFetching: boolean) => void
    //toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => any
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render(): React.ReactNode {

        return <>
            {this.props.isFetching ?
                <div><img src={preloader}/></div> : 'null'}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                //setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                //setTotalUsersCount={this.props.setTotalUsersCount}
                //toggleIsFetching={this.props.toggleIsFetching}
                isFetching={this.props.isFetching}
                //toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userID: string) => {
//             dispatch(follow(userID))
//         },
//         unfollow: (userID: string) => {
//             dispatch(unfollow(userID))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//             //dispatch({type: 'SET_CURRENT_PAGE', pageNumber})
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCount(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

//export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    //toggleIsFetching,
    //toggleFollowingProgress,
    getUsers
})(UsersContainer)