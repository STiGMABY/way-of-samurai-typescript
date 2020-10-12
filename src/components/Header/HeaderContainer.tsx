import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";

type PropsType = {
    login: string | null
    isAuth: boolean
    setAuthUserData: (userId: string, email: string, login: string) => void
}


class HeaderContainer extends Component<PropsType> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
            withCredentials: true
        })
            .then(response =>{
                debugger
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render(): React.ReactNode {
        return <Header
            login={this.props.login}
            isAuth={this.props.isAuth}
            setAuthUserData={this.props.setAuthUserData}
        />
    }
}



const mstp = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mstp, {setAuthUserData})(HeaderContainer)