import React from "react";
import {StoreContext} from "../../../StoreContext";
import MainPagePosts from "./MainPagePosts";
import {AppStateType} from "../../../redux/redux-store";


export function MainPagePostsContainer() {

    return (
        <StoreContext.Consumer>
            {
            (store) => {

                const state: AppStateType = store.getState()
                const mainPagePostsList = state.mainPageReducer.mainPagePostsList

                return <MainPagePosts mainPagePostsList={mainPagePostsList}/>
            }
        }
        </StoreContext.Consumer>
    )
}