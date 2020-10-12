import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    unfollow,
    setTotalUsersCount,
    toggleIsFetching,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users, UsersPropsType} from "./Users";
import preloader from '../../assets/images/preloader.gif'
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        //debugger
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount = 80)
            })
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
                setUsers={this.props.setUsers}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                toggleIsFetching={this.props.toggleIsFetching}
                isFetching={this.props.isFetching}
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
        isFetching: state.usersPage.isFetching
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
    toggleIsFetching
})(UsersContainer)