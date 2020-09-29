import React  from "react";
import {Dispatch} from "redux";
import { connect } from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, setUsersTotalCountAC} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users, UsersPropsType} from "./Users";
import axios from "axios";

class UsersContainer extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        //debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount=80)
        })
    }

    render(): React.ReactNode {

        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            setUsers={this.props.setUsers}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
        />
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return{
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
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

//export const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer)