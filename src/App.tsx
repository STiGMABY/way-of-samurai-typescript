import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {Route} from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import {ActionsType, StoreType} from "./redux/store";
import MyChat from "./components/MyChat/MyChat";
import {AppStateType} from "./redux/redux-store";
import MyChatContainer from "./components/MyChat/MyChatContainer";

type PropsType = {
    //state: RootStateType
    // state: AppStateType
    // dispatch: (action: ActionsType) => void
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
                       />}
                />

                <Route path='/messages'
                       render={() => <MyChatContainer
                       />}
                />
            </div>
            <div className='grid-item footer'>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
