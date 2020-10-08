import React, {Component} from 'react';
import MainPage from "./MainPage";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/main-page-reducer";

class MainPageContainer extends Component<any> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

const mapStateToProps = (state: AppStateType) => ({
    profile: state.mainPageReducer.profile
})



export default connect(mapStateToProps, {setUserProfile})(MainPageContainer)