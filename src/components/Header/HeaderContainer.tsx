import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";


type PropsType = {
    login: string | null
    logout: any
    isAuth: boolean
    //setAuthUserData: (userId: string, email: string, login: string) => void
    //getUserAuthData: () => void
}


class HeaderContainer extends Component<PropsType> {

    render(): React.ReactNode {
        return <Header
            {...this.props}
            // login={this.props.login}
            // isAuth={this.props.isAuth}
            // setAuthUserData={this.props.setAuthUserData}
        />
    }
}


const mstp = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mstp, {logout})(HeaderContainer)