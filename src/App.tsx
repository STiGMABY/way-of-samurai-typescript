import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import {Route} from 'react-router-dom';
import {MyChatContainer} from "./components/MyChat/MyChatContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";


type PropsType = {

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

                <Route path='/content/:userId?'
                       render={() => <MainPageContainer
                       />}
                />

                <Route path='/messages'
                       render={() => <MyChatContainer
                       />}
                />

                <Route path='/users'
                       render={() => <UsersContainer
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
