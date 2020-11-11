import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    addPost,
    getStatus,
    getUserProfile,
    ProfileType,
    updateNewPostText,
    updateStatus
} from "../../redux/main-page-reducer";
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';
import {RouteComponentProps} from "react-router";

type OwnProps = {

}

type PropsType = MapStateType & MapDispatchType & OwnProps & RouteComponentProps<{ userId: string }>


class MainPageContainer extends Component<PropsType> {
    componentDidMount(): void {
        //debugger
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.props.profile && <MainPage
                    profile={this.props.profile}
                    status={this.props.status}
                    //newPostText={this.props.newPostText}
                    updateStatus={this.props.updateStatus}
                    addPost={this.props.addPost}
                    updateNewPostText={this.props.updateNewPostText}
                />}
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.mainPageReducer.profile,
    status: state.mainPageReducer.status,
    authorizedUserId:state.auth.userId,
    isAuth: state.auth.isAuth
    //newPostText: state.mainPageReducer.newPostText,
    //isAuth: state.auth.isAuth
})

type MapStateType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: any
    isAuth: boolean
    //newPostText: string
}

type MapDispatchType = {
    getUserProfile: (userId: number) =>void
    getStatus: (userId: number) => void
    updateStatus: (status: any) => void
    addPost: (newChatMessage: string)=> void
    updateNewPostText:(newPostText: string) => void
}
export default compose<React.ComponentClass>(
    connect<MapStateType,
        MapDispatchType,
        OwnProps,
        AppStateType>(mapStateToProps, {getUserProfile, getStatus, updateStatus, addPost, updateNewPostText}),
        withRouter,
        //withAuthRedirect
)(MainPageContainer)



// type MapStateType = {
//     profile: ProfileType | null
// }
// type MapDispatchType = {
//     setUserProfile: (profile: ProfileType) => void
// }