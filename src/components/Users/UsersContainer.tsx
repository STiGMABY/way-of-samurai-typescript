import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    unfollowAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users, UsersPropsType} from "./Users";
import axios from "axios";
import preloader from '../../assets/images/preloader.gif'

class UsersContainer extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        //debugger
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount = 80)
        })
    }

    render(): React.ReactNode {

        return <>
            {this.props.isFetching ?
                <div><img src={preloader}/> </div> : 'null'}
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

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
            //dispatch({type: 'SET_CURRENT_PAGE', pageNumber})
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

//export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)