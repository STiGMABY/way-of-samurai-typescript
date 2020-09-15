import {combineReducers, createStore, Store} from 'redux'
import {mainPageReducer} from "./main-page-reducer";
import {myChatReducer} from "./my-chat-reducer";

// type RootReducerType = typeof reducers
// export type AppStateType = ReturnType<RootReducerType>

//или одной строкой
export type AppStateType = ReturnType<typeof reducers>

let reducers  = combineReducers({
    mainPageReducer: mainPageReducer,
    myChatReducer: myChatReducer
})

export let store: Store = createStore(reducers)