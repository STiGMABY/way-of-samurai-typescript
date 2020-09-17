import {combineReducers, createStore, Store} from 'redux'
import {mainPageReducer} from "./main-page-reducer";
import {myChatReducer} from "./my-chat-reducer";
import {usersReducer} from "./users-reducer";

// type RootReducerType = typeof reducers
// export type AppStateType = ReturnType<RootReducerType>

//или одной строкой
export type AppStateType = ReturnType<typeof reducers>

let reducers  = combineReducers({
    mainPageReducer: mainPageReducer,
    myChatReducer: myChatReducer,
    usersPage: usersReducer
})

export let store: Store = createStore(reducers)

// @ts-ignore
window.store = store

//в консоли store.getState()