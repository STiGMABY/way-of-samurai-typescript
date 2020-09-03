import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./state";

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    //Если мы сразу не вызываем, что то из store, то это нужно привязать (bind)
                    state={store.getState()}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    )

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
