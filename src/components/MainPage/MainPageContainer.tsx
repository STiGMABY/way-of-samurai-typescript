import React, {Component} from 'react';
import MainPage from "./MainPage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/main-page-reducer";
import {withRouter, Redirect} from 'react-router-dom';

class MainPageContainer extends Component<any> {
    componentDidMount(): void {
        //debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render(): React.ReactNode {
        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <div>
                <MainPage
                    profile={this.props.profile}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.mainPageReducer.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(MainPageContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

// type MapStateType = {
//     profile: ProfileType | null
// }
// type MapDispatchType = {
//     setUserProfile: (profile: ProfileType) => void
// }