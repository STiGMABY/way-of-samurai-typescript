import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Dialogs from "./components/Messages/Dialogs";
import { Route } from 'react-router-dom';

function App() {
    return (
            <div className='app-wrapper'>
                <div className='grid-item header'>
                    <Header />
                </div>
                <div className='grid-item navbar'>
                    <NavBar />
                </div>
                <div className='grid-item content'>
                    <Route path='/content' component={Content}/>
                    <Route path='/messages' component={Dialogs}/>
                </div>
                <div className='grid-item footer'>
                    <Footer />
                </div>
            </div>
    );
}

export default App;
