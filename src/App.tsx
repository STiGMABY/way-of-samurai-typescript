import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import {ActionsType, RootStateType} from "./state";
import MyChat from "./components/MyChat/MyChat";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

function App(props: PropsType) {
    return (
        <div className='app-wrapper'>
            <div className='grid-item header'>
                <Header/>
            </div>
            <div className='grid-item navbar'>
                <NavBar/>
            </div>
            <div className='grid-item content'>

                <Route path='/content'
                       render={() => <MainPage
                           dispatch={props.dispatch}
                           mainPageData={props.state.mainPageData}/>}/>

                <Route path='/messages'
                       render={() => <MyChat
                           dispatch={props.dispatch}
                           chatData={props.state.chatData}/>}/>
            </div>
            <div className='grid-item footer'>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
