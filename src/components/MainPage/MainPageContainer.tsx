import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/main-page-reducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
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
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.props.profile && <MainPage
                    profile={this.props.profile}
                />}
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.mainPageReducer.profile,
    //isAuth: state.auth.isAuth
})

type MapStateType = {
    profile: ProfileType | null
}

type MapDispatchType = {
    getUserProfile: (userId: number) =>void
}
export default compose<React.ComponentClass>(
    connect<MapStateType, MapDispatchType, OwnProps, AppStateType>(mapStateToProps, {getUserProfile}),
        withRouter,
        withAuthRedirect
)(MainPageContainer)



// type MapStateType = {
//     profile: ProfileType | null
// }
// type MapDispatchType = {
//     setUserProfile: (profile: ProfileType) => void
// }