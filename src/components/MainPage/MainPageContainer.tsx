import React, {Component} from 'react';
import MainPage from "./MainPage";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/main-page-reducer";
import { withRouter } from 'react-router-dom';

class MainPageContainer extends Component<any> {
    componentDidMount(): void {
        //debugger
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            //debugger
            this.props.setUserProfile(response.data)
        })
    }

    render(): React.ReactNode {
        return(
            <div>
                <MainPage
                   profile={this.props.profile}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => ({
    profile: state.mainPageReducer.profile
})

let WithUrlDataContainerComponent = withRouter(MainPageContainer)

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

type MapStateType = {
    profile: ProfileType | null
}

type MapDispatchType = {
    setUserProfile: (profile: ProfileType) => void
}