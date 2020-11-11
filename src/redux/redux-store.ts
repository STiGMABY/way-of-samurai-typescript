import {combineReducers, createStore, Store, applyMiddleware} from 'redux'
import {mainPageReducer} from "./main-page-reducer";
import {myChatReducer} from "./my-chat-reducer";
import {usersReducer} from "./users-reducer";
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";


// type RootReducerType = typeof reducers
// export type AppStateType = ReturnType<RootReducerType>

//или одной строкой
export type AppStateType = ReturnType<typeof reducers>

let reducers  = combineReducers({
    mainPageReducer: mainPageReducer,
    myChatReducer: myChatReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store

//в консоли store.getState()