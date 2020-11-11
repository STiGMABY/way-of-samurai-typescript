import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {Route, withRouter} from 'react-router-dom';
import MyChatContainer from "./components/MyChat/MyChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";


type PropsType = {}

class App extends React.Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (
            <div className='app-wrapper'>
                <div className='grid-item header'>
                    <HeaderContainer/>
                </div>
                <div className='grid-item navbar'>
                    <NavBar/>
                </div>
                <div className='grid-item content'>

                    <Route path='/content/:userId?'
                           render={() => <MainPageContainer
                           />}
                    />

                    <Route path='/messages'
                           render={() => <MyChatContainer
                           />}
                    />

                    <Route path='/users'
                           render={() => <UsersContainer/>}
                    />

                    <Route path='/login'
                           render={() => <Login
                           />}
                    />
                </div>
                <div className='grid-item footer'>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mstp = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mstp, {initializeApp}))(App)
